
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Navrajveer Kaur Mauhar</p>
     <p>
      <Link href="./week2">
        Week 2 Assignment
      </Link>
      </p>
      <p>
        <Link href="./week3">
        Week 3 Assignment
      </Link>
      </p>
      <p>
      <Link href="./week-4">
        Week 4 Assignment
      </Link>
      </p>
      <p>
      <Link href="./week-5">
        Week 5 Assignment
      </Link>
      </p>
    </div>
  );
}
