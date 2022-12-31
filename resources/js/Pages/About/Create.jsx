// Import Core Libraries
import { Head } from "@inertiajs/inertia-react";

// Import Layouts
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// Import Custom Components
import CreateForm from "@/Components/About/CreateForm";

export default function AboutCreate(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="About" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <CreateForm
                                about={props.about}
                                errors={props.errors}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
