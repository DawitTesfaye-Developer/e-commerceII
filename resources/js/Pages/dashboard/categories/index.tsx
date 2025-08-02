import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";

export default function Categories(){
    return(
        <AppLayout>
            <Head title="Categories"/>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-x1 p-4">
                <h2>This is the Dashboard</h2>
            </div>
        </AppLayout>
    )
}