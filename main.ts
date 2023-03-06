let input = require('readline-sync');

function Main() {
    let choise = -1
    do {
        console.log(`
                -------MENU-------
        1.Ban co tai khoan? ===> Dang nhap
        2.Ban chua co tai khoan===>Dang ky
        0.Thoat chuonng trinh`);
        choise = +input.question(`Nhap lua chon :`);
        switch (choise) {
            case 1:
                Login();
                break;
            case 2:
                Sigin();
                break;

        }

    } while (choise != 0)
}function Login() {
   let account=input.question(`nhap tai khoan :`);
   let pass=input.question(`nhap mat khau :`);

}


function Sigin() {
    let account=input.question(`Nhap tai khoan :`);
    let pass=input.question(`Nhap mat khau :`);
    let phoneNumber=+input.question(`Nhap so dien thoai :`);

}



Main();