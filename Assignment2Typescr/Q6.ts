class Program{
    private str:string;
 
   
     setValue(st:string){
         this.str = st;
     }
     count(){
         let sum = 0;
         
         if(this.str[0] == 'a' || this.str[0] == 'e' || this.str[0] == 'i' || this.str[0] == 'o' || this.str[0] == 'u' || this.str[0] == 'A' || this.str[0] == 'E' || this.str[0] == 'I' || this.str[0] == 'O' || this.str[0] == 'U')
         {
             for(let i = 1;i < this.str.length;i++){
                 if(this.str[i] != 'a' && this.str[i] != 'e' && this.str[i] != 'i' && this.str[i] != 'o' && this.str[i] != 'u' && this.str[i] != 'A' && this.str[i] != 'E' && this.str[i] != 'I' && this.str[i] != 'O' && this.str[i] != 'U'){
                     sum++;
                 }
             }
         }
         else{
             
             for(let i = 1;i < this.str.length;i++){
                 if(this.str[i] == 'a' || this.str[i] == 'e' || this.str[i] == 'i' || this.str[i] == 'o' || this.str[i] == 'u' || this.str[i] == 'A' || this.str[i] == 'E' || this.str[i] == 'I' || this.str[i] == 'O' || this.str[i] == 'U'){
                     sum++;
                     
                 }
             }
         }
         
         console.log(sum);
     }
 }
 let os = new Program();
 os.setValue("AtikMehta");
 os.count();