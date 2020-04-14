import {useState} from 'react';
export default (initialState) => {
    const [todoValue,setListValue] = useState(initialState);
        return {
            todoValue,
            onChange: (event) => {
                setListValue(event.target.value);
            },
            reset: () => setListValue('')
        };

}