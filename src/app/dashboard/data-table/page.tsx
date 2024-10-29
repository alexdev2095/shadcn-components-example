import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";


const fetchData = async () => {
  return payments
}
const Page = async () => {

  const data = await fetchData();

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Page