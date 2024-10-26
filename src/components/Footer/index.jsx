import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer class="p-4">
            <div class="container mx-auto mt-5 mb-5 flex justify-center items-center">
                <div class="border-t-[1px] rounded-lg border-grey sm:w-full w-[95%]"></div>
            </div>
            <ul class="flex flex-row w-full justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to={'/'} class="mr-4 md:mr-6 ">Home</Link>
                </li>
                <li>
                    <Link to={'/event'} class="mr-4 md:mr-6">Events</Link>
                </li>
                <li>
                    <Link to={'/speaker'} class="mr-4 md:mr-6">Speakers</Link>
                </li>
                <li>
                    <Link to={'/about'} class="mr-4 md:mr-6">About</Link>
                </li>
            </ul>
        </footer>
    )
}