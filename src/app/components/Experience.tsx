export default function Experience() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card p-4 bg-gray-200">
                <div className="section1 bg-blue-200 flex items-center justify-between">
                    <div className="bg-red-200 gap-4">
                        <h2>title</h2>
                    </div>
                    <div className="bg-green-200 gap-4">
                        <h2>Buttons</h2>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gray-200">Card 2</div>
            <div className="p-4 bg-gray-200">Card 3</div>
        </div>
    )
};