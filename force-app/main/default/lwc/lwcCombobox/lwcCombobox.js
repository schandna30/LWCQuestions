import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/comboboxExample.getAccounts';

export default class LwcCombobox extends LightningElement {
    value='';
    @track accOption= [];
    get Options(){
        return  this.accOption;
    }
    connectedCallback(){
        getAccounts()
        .then(result=>{
            let arr=[];
            for(var i=0;i<result.length;i++){
                arr.push({label: result[i].Name, value: result[i].Id})
            }
             this.accOption=arr;

        })
       
    }
    handleChange(event){
        this.value= event.detail.value;
    }
}