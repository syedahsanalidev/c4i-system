import React,{useState} from 'react';
import MultiSelectBox from 'react-multiselect-box'
import 'react-multiselect-box/build/css/index.css'

const Requirements = () => {
    const [state,setState]=useState({
        selectedOne:[],
        selectedTwo:[]
    });
    const securityRequirements = [
        {desc: 'Confidently', value: '1'},
        {desc: 'Integrity', value: '2'},
        {desc: 'Accountability', value: '3'},
        {desc: 'Availability', value: '4'},
        {desc: 'System Configuration', value: '5'},
        ];
    const { selectedOne } = state;
    return <MultiSelectBox
        options={securityRequirements}
        labelKey="desc"
        valueKey="value"
        onAdd={selectedItem => {
            setState({
                selectedOne: [...state.selectedOne, selectedItem.value]
            })
        }}
        onRemove={(removedItem, index) => {
            setState({
                selectedOne: [
                    ...state.selectedOne.filter(
                        item => item !== removedItem.value
                    )
                ]
            })
        }}
        onSelectAll={selectedItems => {
            setState({
                selectedOne: [
                    ...state.selectedOne,
                    ...selectedItems.map(item => item.value)
                ]
            })
        }}
        onRemoveAll={() => {
            setState({
                selectedOne: []
            })
        }}
        valueArray={selectedOne}
    />
};
export default Requirements;
