import { Badge, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { amounteAdd, decremented, incremented } from '../features/counter/counterSlice';
export default function Counter() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2 className='ms-3 my-3'>test counter redux</h2>
            <ButtonGroup className='ms-3' >
                <Button
                    className='large'
                    variant='primary'
                    onClick={() => {
                        dispatch(incremented());
                    }}
                >
                    inc
                </Button>
                <Button
                    className='large'
                    variant='danger'
                    onClick={() => {
                        dispatch(decremented());
                    }}
                >
                    dec
                </Button>
                <Button
                    className='large'
                    variant='info'
                    onClick={() => {
                        dispatch(amounteAdd(3));
                    }}
                >
                    amoutAdd
                </Button>

            </ButtonGroup>
            <h3 className='mt-2 ms-3' >count is <Badge bg="success">{count}</Badge></h3>
        </div>
    )
}
