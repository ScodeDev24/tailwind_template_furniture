import ContactCard from "../components/ContactCard/ContactCard";

export default function Contacts() {
    const rowCount = 4;

    return (
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
            <form className="space-y-8 bg-white p-8 rounded-lg shadow-md lg:w-2/3">
                <div className="border-b border-gray-200 pb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Contact Us</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div className="sm:col-span-1">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="sm:col-span-1">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={rowCount}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        ></textarea>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-x-4">
                    <button type="button" className="text-sm font-semibold text-gray-700">
                        Cancel
                    </button>
                    <button type="submit" className="bg-indigo-600 px-4 py-2 text-white rounded-md shadow-sm hover:bg-indigo-500">
                        Send Message
                    </button>
                </div>
            </form>

            <div className="flex-shrink-0 lg:w-1/3">
                <ContactCard />
            </div>
        </div>
    );
}
