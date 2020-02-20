var vio =[];
function string(a=['apple','apple','apple']){
    var c=1;
    for (i=1;i<a.length;i++){
        if(a[i]===a[c]){
            console.log(true);
            final.push(a[c]+c);
            c++
        }
        else{
            console.log(false);
        }
    }
}
string(a=['apple','apple','apple']);
console.log(final);






