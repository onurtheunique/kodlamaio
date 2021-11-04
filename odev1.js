//---------- ödev 1----------
function findPrime(...numbers)
{ let primes=[]
  for (var i = 0; i < numbers.length; i++) 
  {
    let  SUMDdviders=0
    for (var d = 1; d < numbers[i]; d++) 
    {
    if (numbers[i]%d==0)
    {
      SUMDdviders++
    }
  
    }
      if(SUMDdviders<2)
    {
      primes.push(numbers[i])
    }
  }
  for (var i = 0; i < primes.length; i++) {
    console.log(primes[i]+" Asal bir sayıdır")
  }
}
findPrime(2,3,4,5,7,11,13,17,19,20,23,25,29)

//------- Ödev 2 -------------
function SumDividers(value)
{ 
          let total=0
   for (let divisor =1;divisor<value; divisor++) 
        {
           if( value%divisor==0)
           {
               total=total+divisor
           }        
        }
        return total
}

function amicable(value1,value2)
{  
  if((value1==SumDividers(value2))&&(value2==SumDividers(value1)))
  {
    console.log(value1+" ve "+value2+" kardeş sayılardır")
  }
}

amicable(220,284)
//-----------  Ödev 3 ---------------
function Dividers(value)
{ 
          let total=0
   for (let divisor =1;divisor<value; divisor++) 
        {
           if( value%divisor==0)
           {
               total=total+divisor
           }        
        }
        return total
}
function perfectus()
{
  let perfectus=[]
  for (var i = 1; i <=1000 ; i++) 
  {
   if ( Dividers(i)==i)
   {
     perfectus.push(i)
   }
  }
    for (var i = 0; i < perfectus.length; i++) {
    console.log(perfectus[i]+" bir mükemmel sayıdır")
  }
}
perfectus()

//------------- Ödev 4 -------------
function primes()
{ let primes=[]
  for (var i = 2; i <= 1000; i++) 
  {
    let  SUMDdviders=0
    for (var d = 1; d < i; d++) 
    {
    if (i%d==0)
    {
      SUMDdviders++
    }
  
    }
      if(SUMDdviders<2)
    {
      primes.push(i)
    }
  }
  for (var i = 0; i < primes.length; i++) {
    console.log(primes[i]+" Asal bir sayıdır")
  }
}
primes()
//------- Bonus------
/* 2 numaralı ödevi yanlış okuduğum için bu kodu yazmış bulundum.
İçinde dizilere veri girme ve çağırma olduğu için 
ilgi çekebilir diye paylaşıyırum.
Burada verilen liste içinde birbirinin arkadaşı olan var mı diye bakılıyor
*/
function SUMDividers(value)
{ 
          let total=0
   for (let divisor =1;divisor<value; divisor++) 
        {
           if( value%divisor==0)
           {
               total=total+divisor
           }        
        }
        return {sayi:value,bolenlerToplami:total}
 
}

function search(value,numbers)
{  
  let result=0
  for (let i =0; i< numbers.length; i++)
            {

                if (numbers[i]==value.bolenlerToplami )
                {
                result=result+1
                }

            }
            if (result>0) 
            { 
               return true
            }
            return false
}

function filter(baselist)
{
  let filtered=[]
   for (var i = 0; i < baselist.length; i++) 
   {
    let line= baselist[i]
    for (var d = 0; d < i; d++) 
      { let hit=0
        if(baselist[d].bolenlerToplami!=line.sayi)
      {
      hit++
      }
      if (hit==0)
      {
      filtered.push(line)
      }
 }
    
  }
  return filtered
}
function main (...numbers)
{
  let finalized=[]
  for (let i=0; i<numbers.length;i++)
  {
    let res=SUMDividers(numbers[i])
    if (res.bolenlerToplami>1 &&search(res,numbers)) 
    {
       finalized.push(res)
    }
   
  } 
  finalized=filter(finalized)
  for (var i = 0; i < finalized.length; i++) {
    console.log(finalized[i].sayi+" ve "+finalized[i].bolenlerToplami+" kardeş sayılardır")
  }
  
}

main(2,5,220,284,69615,87633,122368,123152)