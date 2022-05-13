

const AuthCard = ({ logo, children }) => (
    <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
                <div className="flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-blueGray-200">
                    <div className="z-10">{logo}</div>

                    <div className="z-10 w-full sm:max-w-md mt-6 py-4 bg-blueGray-200 shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default AuthCard
