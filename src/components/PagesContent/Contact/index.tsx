import * as S from './styles';
import { usePage } from "../../PageLayout";
import { Background } from "../../PageLayout/Background";
import { Header } from "../../PageLayout/Header";
import background from "../../../assets/images/hNXv7eCDkEA7df22j0bfvVHszpLr3f3BfFcL9Ahr.jpg";
import { data } from './data';
import { BsFacebook, BsLinkedin, BsFillEnvelopeFill, BsGithub} from "react-icons/bs";

export const Contact = () => {
    const page = usePage();
    
    return (
        <S.Main>
            <Background 
                url={background} 
                position={'50% 50%'} 
            />

            <Header 
                isLoaded={page.state==='LOADED' ? true : false} 
                title={data.title[page.lang]} 
                subtitle={data.paragraph[page.lang]} 
            />

            <S.Links  className={page.state==='LOADED' ? '' : 'hidden'}>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/tpabarbosa">
                    <S.Link className="text-btn">
                        <BsFacebook />
                        <div>tpabarbosa</div>
                    </S.Link>
                </a>   
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tpabarbosa/">
                    <S.Link className="text-btn">
                        <BsLinkedin />
                        <div>tpabarbosa</div>
                    </S.Link>
                </a> 
                <a target="_blank" rel="noreferrer" href="https://github.com/tpabarbosa">
                    <S.Link className="text-btn">
                        <BsGithub />
                        <div>tpabarbosa</div>
                    </S.Link>
                </a>
                <MailTo email='tpabarbosa@yahoo.com.br' subject='Contact from Portfolio'>
                    <S.Link className="text-btn">
                        <BsFillEnvelopeFill /> 
                        <div>tpabarbosa@yahoo.com.br</div>
                    </S.Link>
                </MailTo>
                <MailTo email='tpabarbosa@gmail.com' subject='Contact from Portfolio'>
                    <S.Link className="text-btn">
                        <BsFillEnvelopeFill /> 
                        <div>tpabarbosa@gmail.com</div>
                    </S.Link>
                </MailTo>  
            </S.Links>
        </S.Main>
    )
}

type MailToProps = {
    email: string
    subject?: string
    body?: string
    children: React.ReactNode
}

const MailTo = ({ email, subject='', body='', children }:MailToProps ) => {
    
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};