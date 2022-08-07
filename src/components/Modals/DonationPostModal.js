
import { Formik, Field, Form, useField } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { MultiSelect } from 'primereact/multiselect'

const DonationPostModal = ({
    modalIsOpen,
    toggleModel,
    handelSubmitModel,
    charitableFoundationId,
    isCampaign = false,
    modalIsAdd,
    donationPost,
}) => {
    const [statusTypes, setStatusTypes] = useState([])
    const [branches, setBranches] = useState([])
    const [cities, setCities] = useState([])

    const {
        data: statusTypesData,
        statusTypesError,
    } = useSWR(`admin/statusType/index`, { refreshInterval: 0 })
    const {
        data: branchesData,
        branchesError,
    } = useSWR(
        `admin/branch/charitablefoundation/${charitableFoundationId}/index`,
        { refreshInterval: 0 },
    )
    const { data: citiesData, citiesError } = useSWR(`admin/city/index`)

    useEffect(() => {
        if (statusTypesData) {
            setStatusTypes(statusTypesData.data.statusTypes)
            console.log(statusTypes)
        }
        if (branchesData) {
            setBranches(branchesData.data.branchs)
            console.log(branches)
        }
        if (citiesData) {
            setCities(citiesData.data.cities)
        }
    }, [statusTypesData, branchesData])

    return (
        <>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal z-20"
                    id="my-modal-2"
                >
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <h3 className="mb-10 text-lg font-bold text-center">
                                {modalIsAdd ? 'Add new Donation Post' : 'Edit Donation Post'}
                            </h3>
                            <button
                                onClick={e => toggleModel(e)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <Formik
                            initialValues={modalIsAdd ?
                                {
                                    title: '',
                                    description: '',
                                    start_date: '',
                                    end_date: '',
                                    amount_required: '',

                                    status_type_id: '',
                                    branch_id: '',
                                    city_id: '',
                                    image: '',

                                    first_name: '',
                                    last_name: '',
                                    id_number: '',
                                    phone_number: '',
                                    father_name: '',
                                    mother_name: '',
                                } :
                                {
                                    title: donationPost.title,
                                    description: donationPost.description,
                                    amount_required: donationPost.amount_required,

                                    start_date: new Date(donationPost.start_date),
                                    end_date: new Date(donationPost.end_date),
                                    status_type_id: donationPost.status_type_id,
                                    branch_id: donationPost.branch_id,
                                    city_id: donationPost.city_id,

                                    first_name: donationPost.first_name,
                                    last_name: donationPost.last_name,
                                    id_number: donationPost.id_number,
                                    phone_number: donationPost.phone_number,
                                    father_name: donationPost.father_name,
                                    mother_name: donationPost.mother_name,
                                }}
                            onSubmit={async values =>
                                handelSubmitModel(values)
                            }>
                            {({ setFieldValue, values }) => (
                                <Form>
                                    <div className="flex flex-col items-center justify-center">
                                        {/* Title Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="title"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Title
                                            </label>

                                            <Field
                                                type="text"
                                                name="title"
                                                id="title"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="title"
                                            />
                                        </div>

                                        {/* Description Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="description"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                Description
                                            </label>
                                            <Field
                                                type="text"
                                                name="description"
                                                id="description"
                                                as="textarea"
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Your description..."
                                            />
                                        </div>

                                        {/*Start Date Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="start_date"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Start Date
                                            </label>

                                            <DatePicker
                                                selected={values.start_date}
                                                dateFormat="MMMM d, yyyy"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="start_date"
                                                id="start_date"
                                                onChange={date =>
                                                    setFieldValue(
                                                        'start_date',
                                                        date,
                                                    )
                                                }
                                            />
                                        </div>

                                        {/*End Date Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="end_date"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                End Date
                                            </label>

                                            <DatePicker
                                                selected={values.end_date}
                                                dateFormat="MMMM d, yyyy"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="end_date"
                                                id="end_date"
                                                onChange={date =>
                                                    setFieldValue(
                                                        'end_date',
                                                        date,
                                                    )
                                                }
                                            />
                                        </div>

                                        {/* Amount Required Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="amount_required"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Amount Required
                                            </label>

                                            <Field
                                                type="number"
                                                name="amount_required"
                                                id="amount_required"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="amount required"
                                            />
                                        </div>

                                        {/* Status Type Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="status_type"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Status Type
                                            </label>
                                            <MultiSelectField
                                                name="status_type_id"
                                                id="status_type"
                                                status_type_id={donationPost.status_type_id}
                                                options={statusTypes}
                                                optionLabel="title"
                                                optionValue="id"
                                                placeholder="Choose a Status Type"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                                            />
                                        </div>

                                        {/* Branch Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="branch"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Branch
                                            </label>
                                            <Field
                                                as="select"
                                                name="branch_id"
                                                id="branch"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>
                                                    Choose a Branch
                                                </option>
                                                {branches.length &&
                                                    branches.map(branch => {
                                                        return (
                                                            <option
                                                                key={branch.id}
                                                                value={
                                                                    branch.id
                                                                }>
                                                                {branch.name}
                                                            </option>
                                                        )
                                                    })}
                                            </Field>
                                        </div>

                                        {/* City Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="city"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                City
                                            </label>
                                            <Field
                                                as="select"
                                                name="city_id"
                                                id="city"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>
                                                    Choose a City
                                                </option>
                                                {cities.map(city => {
                                                    return (
                                                        <option
                                                            key={city.id}
                                                            value={city.id}>
                                                            {city.name}
                                                        </option>
                                                    )
                                                })}
                                            </Field>
                                        </div>

                                        {/* Image Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                htmlFor="image">
                                                Upload Image
                                            </label>
                                            <input
                                                id="image"
                                                name="image"
                                                type="file"
                                                onChange={event => {
                                                    setFieldValue(
                                                        'image',
                                                        event.currentTarget
                                                            .files[0],
                                                    )
                                                }}
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            />
                                        </div>

                                        {!isCampaign && (
                                            <>
                                                {/* Divider */}
                                                <div className="divider text-gray-400">
                                                    State
                                                </div>

                                                {/* First Name Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        htmlFor="first_name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        First Name
                                                    </label>

                                                    <Field
                                                        type="text"
                                                        name="first_name"
                                                        id="first_name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="first name"
                                                    />
                                                </div>

                                                {/* Last Name Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        htmlFor="last_name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Last Name
                                                    </label>

                                                    <Field
                                                        type="text"
                                                        name="last_name"
                                                        id="last_name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="last name"
                                                    />
                                                </div>

                                                {/* ID Number Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        htmlFor="id_number"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        ID Number
                                                    </label>

                                                    <Field
                                                        type="number"
                                                        name="id_number"
                                                        id="id_number"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="id_number"
                                                    />
                                                </div>

                                                {/* Phone Number Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        htmlFor="phone_number"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Phone Number
                                                    </label>

                                                    <Field
                                                        type="text"
                                                        name="phone_number"
                                                        id="phone_number"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="phone number"
                                                    />
                                                </div>

                                                {/* Father name Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        htmlFor="father_name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Father name
                                                    </label>

                                                    <Field
                                                        type="text"
                                                        name="father_name"
                                                        id="father_name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="father name"
                                                    />
                                                </div>

                                                {/* Mother Name Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        htmlFor="mother_name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Mother Name
                                                    </label>

                                                    <Field
                                                        type="text"
                                                        name="mother_name"
                                                        id="mother_name"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="mother_name"
                                                    />
                                                </div>

                                                {/* Image State Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="state_image">
                                                        Upload Image State
                                                    </label>
                                                    <input
                                                        id="state_image"
                                                        name="state_image"
                                                        type="file"
                                                        onChange={event => {
                                                            setFieldValue(
                                                                'state_image',
                                                                event
                                                                    .currentTarget
                                                                    .files[0],
                                                            )
                                                        }}
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    />
                                                </div>

                                                {/* IdCard Front Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="idCard_front_image">
                                                        Upload IdCard Front
                                                    </label>
                                                    <input
                                                        id="idCard_front_image"
                                                        name="idCard_front_image"
                                                        type="file"
                                                        onChange={event => {
                                                            setFieldValue(
                                                                'idCard_front_image',
                                                                event
                                                                    .currentTarget
                                                                    .files[0],
                                                            )
                                                        }}
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    />
                                                </div>

                                                {/* IdCard Back Fielad */}
                                                <div className="w-full mb-6">
                                                    <label
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        htmlFor="idCard_back_image">
                                                        Upload IdCard Back
                                                    </label>
                                                    <input
                                                        id="idCard_back_image"
                                                        name="idCard_back_image"
                                                        type="file"
                                                        onChange={event => {
                                                            setFieldValue(
                                                                'idCard_back_image',
                                                                event
                                                                    .currentTarget
                                                                    .files[0],
                                                            )
                                                        }}
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="modal-action">
                                        <button
                                            onClick={e => toggleModel(e)}
                                            className="btn btn-primary btn-outline rounded-xl">
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary rounded-xl">
                                            {modalIsAdd
                                                ? 'Add'
                                                : 'Edit'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    )
}

export default DonationPostModal

const MultiSelectField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)

    return (
        <>
            <MultiSelect
                {...field}
                {...props}
                onChange={e => helpers.setValue(e.target.value)}
            />
        </>
    )
}
