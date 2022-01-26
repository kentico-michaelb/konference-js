import Link from "next/link";
import { NavParams } from "../models/NavParams";

export default function Navigation({
    pages
}: {
    pages:Array<NavParams>
}) {
    return (
        <nav>
            <Link href="/">Home</Link>
            {pages.map(page => (
                <div key={page.params.page.system.id}>
                    <Link href={page.params.slug}>{page.params.page.elements.title.value}</Link>
                </div>
            ))}
        </nav>
    )
}