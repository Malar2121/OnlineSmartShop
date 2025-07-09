import netherlandsRecruiter from './Tharma-it-recruitment.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="Tharma-it-recruitment"
        src={netherlandsRecruiter}
      />
    </S.Thumbnail>
    <S.Description>
      {/* <h4>
        Work in the Netherlands
        <S.Flag />
      </h4> */}
      <p>
        Hi! I'm Tharmajeelan Malravan from Srilanka IT Recruitment and I'm looking for
        skilled Software Engineers like you. 
        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BMqJewqcOSnS%2BYXgyRc2MLg%3D%3D">
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
