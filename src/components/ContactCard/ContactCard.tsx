
export default function ContactCard() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Contact Information</div>
                <p className="text-gray-700 text-base">
                    <strong>Name:</strong> Scode
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Email:</strong> scode.dev2024@gmail.com
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Phone:</strong> +593 000 00000
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href="mailto:scode.dev2024@gmail.com" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">
                    Email Me
                </a>
            </div>
        </div>
    );
}
