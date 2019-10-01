let a=parseInt(prompt('diem bai kiem tra'));
let b=parseInt(prompt('diem giua ky'));
let c=parseInt(prompt('diem cuoi ky'));
mediumscore=(a+b+c)/3
if (mediumscore<4){
    alert('Hoc sinh yeu')
}else if (mediumscore<7){
    alert('hoc sinh trung binh');
}else {
    alert('hoc sinh gioi');
}