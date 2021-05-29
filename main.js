document.querySelector('.button').addEventListener('click' , calculate);
const resuts = document.querySelector(".collection");
function calculate(e){
  while(resuts.firstChild){
    resuts.removeChild(resuts.firstChild);
  }
  const amount = document.getElementById('amount');
  const interest = document.getElementById('intrest');
  const year = document.getElementById('year');
  const principal = parseFloat(amount.value);
  const calcInterest = parseFloat(interest.value)/100/12;
  const calcPayment = parseFloat(year.value)*12;

  const x= Math.pow(1+calcInterest,calcPayment);
  const monthly = (principal*x*calcInterest)/(x-1);
  if(isFinite(monthly)){
    const rH = document.createElement('li');
    rH.className = "collection-item bold";
    rH.appendChild(document.createTextNode("Results"));
    const mp = document.createElement('li');
    mp.className = 'collection-item';
    const mpHead = document.createElement('b')
    mpHead.className = 'result-head';
    mpHead.appendChild(document.createTextNode('Monthly Payment : '))
    mp.appendChild(mpHead);
    mp.appendChild(document.createTextNode(monthly.toFixed(2)));

    
    const tp = document.createElement('li');
    tp.className = 'collection-item';
    const tpHead = document.createElement('b')
    tpHead.className = 'result-head';
    tpHead.appendChild(document.createTextNode('Total Payment : '))
    tp.appendChild(tpHead);
    tp.appendChild(document.createTextNode((monthly*calcPayment).toFixed(2)));
    resuts.appendChild(tp)
    const I = document.createElement('li');
    I.className = 'collection-item';
    const IHead = document.createElement('b')
    IHead.className = 'result-head';
    IHead.appendChild(document.createTextNode('Monthly Payment : '))
    I.appendChild(IHead);
    I.appendChild(document.createTextNode(((monthly*calcPayment)-principal).toFixed(2)));
    resuts.appendChild(rH)
    resuts.appendChild(mp)
    resuts.appendChild(tp)
    resuts.appendChild(I)
    e.preventDefault();
  }else{
    alert('Please check your numbers');
  }
  e.preventDefault ();
}