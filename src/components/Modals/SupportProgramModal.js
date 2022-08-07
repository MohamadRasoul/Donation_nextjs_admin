
import { Formik, Field, Form } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import moment from 'moment'

const SupportProgramModal = ({
    modalIsOpen,
    toggleModel,
    handelSubmitModel,
    charitableFoundationId,
    modalIsAdd,
    supportProgram,
}) => {
    const [supportProgramTypes, setSupportProgramTypes] = useState([])
    const [branches, setBranches] = useState([])
    const [cities, setCities] = useState([])

    console.log(supportProgram);
    const {
        data: supportProgramTypesData,
        supportProgramTypesError,
    } = useSWR(`admin/supportProgramType/index`)

    const {
        data: branchesData,
        branchesError,
    } = useSWR(
        `admin/branch/charitablefoundation/${charitableFoundationId}/index`,
    )

    const {
        data: citiesData,
        citiesError,
    } = useSWR(
        `admin/city/index`,
    )

    useEffect(() => {
        if (supportProgramTypesData) {
            setSupportProgramTypes(
                supportProgramTypesData.data.supportProgramTypes,
            )
        }
        if (branchesData) {
            setBranches(branchesData.data.branchs)
        }
        if (citiesData) {
            setCities(citiesData.data.cities)
        }
    }, [supportProgramTypesData, branchesData, citiesData])

    return (
        <>
            {modalIsOpen && (
                <div
                    className="visible opacity-100 pointer-events-auto modal"
                    id="my-modal-2">
                    <div className="w-2/4 modal-box scrollbar-hide">
                        <div className="flex justify-between">
                            <h3 className="mb-10 text-lg font-bold text-center">
                                {modalIsAdd ? 'Add new Support Program' : 'Edit Support Program'}
                            </h3>
                            <button
                                onClick={e => toggleModel(e)}
                                type="button"
                                className="w-8 h-8 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <Formik
                            initialValues={modalIsAdd
                                ? {
                                    title: '',
                                    description: '',
                                    begin_date: '',
                                    url_to_contact: '',
                                    support_program_type_id: '',
                                    branch_id: '',
                                    city_id: '',
                                    image: '',

                                    instructor: '',
                                    image_instructor: '',
                                } : {
                                    title: supportProgram.title,
                                    description: supportProgram.description,
                                    begin_date: new Date(supportProgram.begin_date),
                                    url_to_contact: supportProgram.url_to_contact,
                                    support_program_type_id: supportProgram.support_program_type_id,
                                    branch_id: supportProgram.branch_id,
                                    city_id: supportProgram.city_id,

                                    instructor: supportProgram.instructor,
                                }}
                            onSubmit={async values =>
                                handelSubmitModel(values)
                            }>
                            {({ setFieldValue, values }) => (
                                <Form>

                                    {/* Input for Form */}
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

                                        {/* Url To Contact Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="url_to_contact"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Url To Contact
                                            </label>

                                            <Field
                                                type="text"
                                                name="url_to_contact"
                                                id="url_to_contact"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="url to contact"
                                            />
                                        </div>

                                        {/*Begin Date Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="begin_date"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Begin Date
                                            </label>

                                            <DatePicker
                                                selected={values.begin_date}
                                                dateFormat="MMMM d, yyyy"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                name="begin_date"
                                                id="begin_date"
                                                onChange={date =>
                                                    setFieldValue(
                                                        'begin_date',
                                                        date,
                                                    )
                                                }
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
                                                <option selected value=''>
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
                                                <option selected value=''>
                                                    Choose a City
                                                </option>
                                                {cities.length &&
                                                    cities.map(city => {
                                                        return (
                                                            <option
                                                                key={city.id}
                                                                value={
                                                                    city.id
                                                                }>
                                                                {city.name}
                                                            </option>
                                                        )
                                                    })}
                                            </Field>
                                        </div>

                                        {/* support program type Filed */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="support_program_type"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Type
                                            </label>
                                            <Field
                                                as="select"
                                                name="support_program_type_id"
                                                id="support_program_type"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected value=''>
                                                    Choose a Support Program
                                                    Type
                                                </option>
                                                {supportProgramTypes.length &&
                                                    supportProgramTypes.map(
                                                        supportProgramType => {
                                                            return (
                                                                <option
                                                                    key={
                                                                        supportProgramType.id
                                                                    }
                                                                    value={
                                                                        supportProgramType.id
                                                                    }>
                                                                    {
                                                                        supportProgramType.title
                                                                    }
                                                                </option>
                                                            )
                                                        },
                                                    )}
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

                                        {/* Divider */}
                                        <div className="divider text-gray-400">Instructor</div>


                                        {/* Instructor Name Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                htmlFor="instructor"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Instructor Name
                                            </label>

                                            <Field
                                                type="text"
                                                name="instructor"
                                                id="instructor"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="instructor name..."
                                            />
                                        </div>

                                        {/* Instructor Image Fielad */}
                                        <div className="w-full mb-6">
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                htmlFor="image_instructor">
                                                Upload Instructor Image
                                            </label>
                                            <input
                                                id="image_instructor"
                                                name="image_instructor"
                                                type="file"
                                                onChange={event => {
                                                    setFieldValue(
                                                        'image_instructor',
                                                        event.currentTarget
                                                            .files[0],
                                                    )
                                                }}
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit & Close Modal */}
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

export default SupportProgramModal
