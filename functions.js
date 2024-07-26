const s1 = document.querySelector("#s1")
const s2 = document.querySelector("#s2")
const s3 = document.querySelector("#s3")
const s4 = document.querySelector("#s4")
const canva = document.querySelector("#canva")


function ClickAD(valor){
    switch (valor){
        case 's1':
            s1.classList = 'section-first ativado-flex'
            s2.classList = 'section-second desativado'
            s3.classList = 'section-second desativado'
            s4.classList = 'section-second desativado'
            canva.classList = ''
            break;
        case 's2':
            s1.classList = 'section-first desativado'
            s2.classList = 'section-second ativado-flex'
            s3.classList = 'section-second desativado'
            s4.classList = 'section-second desativado'
            canva.classList = 'blur-canva'
            break;
        case 's3':
            s1.classList = 'section-first desativado'
            s2.classList = 'section-second desativado'
            s3.classList = 'section-second ativado-flex'
            s4.classList = 'section-second desativado'
            canva.classList = 'blur-canva'
            break;
        case 's4':
            s1.classList = 'section-first desativado'
            s2.classList = 'section-second desativado'
            s3.classList = 'section-second desativado'
            s4.classList = 'section-second ativado-flex'
            canva.classList = 'blur-canva'
            break;
        default:
            s1.classList = 'section-first ativado-flex'
            s2.classList = 'section-second desativado'
            s3.classList = 'section-second desativado'
            s4.classList = 'section-second desativado'
            canva.classList = ''
            break;
    }
}