import Link from "next/link";

export default function StudentList(){
    return (
        <div>
            <ul>
                <li><Link href="/studentlist/gautam" >Gautam</Link> </li>
                <li><Link href="/studentlist/aditya">Aditya</Link></li>
                <li><Link href="/studentlist/pankaj">Pankaj</Link></li>
                <li><Link href="/studentlist/jatin">Jatin</Link></li>
            </ul>
        </div>
    )
}