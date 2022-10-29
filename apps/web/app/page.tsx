import Link from "next/link";

const page = async () => {
  return (
    <nav>
      <Link href="/pets">pets</Link>
    </nav>
  );
};

export default page;
