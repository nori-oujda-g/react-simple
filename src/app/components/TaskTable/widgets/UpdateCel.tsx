import { Button } from "react-bootstrap";
import { type Client } from "../../../../features/client/clientApiSlice";
import { type Operation } from "../../../../features/Types";
import { myPadding } from "../TaskTable";
import { type CellProps } from "./EditableCell";
interface UpdateCelPros extends CellProps {
    client: Client;
    setClient: (c: Client) => void;
    show: boolean;
    setShow: (s: boolean) => void;
    title: React.ReactNode;
    setOperation: (o: Operation) => void
    operation: Operation;
}
const UpdateCel = ({ row, setClient, setShow, title, operation, setOperation }: UpdateCelPros) => {
    // const [client, setClient] = useState<Client>(row.getVisibleCells()[0].row.original as Client);
    return (<div style={{ ...myPadding, paddingTop: 10 }} >
        <Button variant={operation == "UPDATE" ? "success" : "danger"}
            onClick={() => {
                setClient(row.getVisibleCells()[0].row.original as Client);
                setOperation(operation)
                setShow(true)
                // alert(JSON.stringify(client))
            }}
        >{title} </Button>
    </div>)
}

export default UpdateCel