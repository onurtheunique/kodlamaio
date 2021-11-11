function findprime(...numbers) 
 { 
    //  let table=[]

    for (let i =0; i< numbers.length; i++)
    { 
        let total=0
        for (let divisor =1;divisor<numbers[i]; divisor++) 
        {
            // console.log(numbers[i]%divisor)
           if( numbers[i]%divisor==0)
           {
               total=total+divisor
           }        
        }
   
            for (let numb =0; numb< numbers.length; numb++)
            {
                if (numbers[numb]==total)
                {console.log(numbers[i]+" ile "+ numbers[numb]+" arkadaş değerlerdir")}
            }

    }
// console.log(table);
}

// findprime(2,5,8,21, 13,220,284)
findprime(220,284,5,17296,18416)

/*
1 değerin bölenleri toplamı bulunacak
2 bu toplam, girilmiş olan değerler içinde var mı bakılacak
3 bulunan değer varsa onun da bölenler toplamı bulunacak
4 sonra değerler arkadaş ilan edilecek */