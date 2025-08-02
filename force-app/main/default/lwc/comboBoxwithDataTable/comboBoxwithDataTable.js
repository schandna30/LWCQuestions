import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/comboboxExample.getAccounts';
import getContacts from '@salesforce/apex/comboboxExample.getContacts';
const columns=[
    {label :"Contact Name" , fieldname:"Name"},
     {label :"Contact Email" , fieldName:"Email"}
    
];


export default class ComboBoxwithDataTable extends LightningElement {
    @track value='';
    @track optionArr=[];
    @track cardVisible;
    @track data=[];//used for storing the contacts
    @track columns=columns;
    get options(){
        return this.optionArr
    }
    connectedCallback(){
        getAccounts() 
            .then(result=>{
                let arr=[];
                for(var i=0;i<result.length;i++){
                    arr.push({label: result[i].Name,value: result[i].Id})
                }
                this.optionArr=arr;
            })
        
    }
    handleChange(event){
        this.value=event.detail.value;
        this.cardVisible=true;//whenever we select any account card gets visible and we show related contcats table
        //call method to get related contacts
        getContacts({ selectedAccId: this.value})
        .then(result=>{
             console.log('Contacts:', result);
            this.data=result;
        })
        .catch(error=>{
            windows.alert("error"+error);
        })

    }

}