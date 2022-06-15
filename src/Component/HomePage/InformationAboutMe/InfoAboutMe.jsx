import Slider from "../../../Common/Slider/Slider";
import style from "./InfoAboutMe.module.css";
import imgHtml from "./../../../img/html.png";
import imgCss from "./../../../img/css.png";
import imgLess from "./../../../img/less.png";
import imgJs from "./../../../img/js.png";
import imgReact from "./../../../img/react.png";
import imgRedux from "./../../../img/redux.png";
import imgPhotoshop from "./../../../img/photoshop.png";
import imgBootstrap from "./../../../img/bootstrap.svg";
import imgGit from "./../../../img/git.png";
import ItemSkill from "./ItemSkill";

const InfoAboutMe = () => {
  return (
    <div className={style.info_about_me}>
      <div className={style.carousel}>
        <Slider />
      </div>
      <div className={style.content_block}>
        <div className={style.summary}>
          <h2>Summary of Qualifications</h2>
          <div>
            <ul>
              <li>
                Preparation of technical specifications for developers -
                partners of the company.
              </li>
              <li>Operation and administration of CRM system</li>
              <li>
                Designing of posters, photo editing, preparation of
                visualization for shops and website
              </li>
              <li>
                Management of the administration panel of the site, adding
                items, editing item info and technical edits
              </li>
              <li>Preparation of HTML emails for mailing</li>
            </ul>
          </div>
        </div>
        <div className={style.skills_block_wrapper}>
          <h2>Skills</h2>
          <div className={style.skills_block}>
            <ItemSkill
              icon={imgHtml}
              title={"HTML5"}
              subMenu={[
                "Understanding BEM Metodology",
                "Create layout",
                "Use HTML plugins",
              ]}
            />
            <ItemSkill
              icon={imgCss}
              title={"CSS3"}
              subMenu={["Flexbox", "Grid", "Animation"]}
            />
            <ItemSkill icon={imgLess} title={"LESS"} subMenu={["Mixin"]} />
            <ItemSkill
              icon={imgBootstrap}
              title={"Bootstrap"}
              subMenu={["Use Component", "Use layout"]}
            />
            <ItemSkill
              icon={imgJs}
              title={"JavaScript"}
              subMenu={["Ajax", "JSON", "Basic understanding with OOP"]}
            />
            <ItemSkill
              icon={imgReact}
              title={"React"}
              subMenu={[
                "Axios",
                "Hooks",
                "React-router-dom",
                "Thunk",
                "React-redux",
              ]}
            />
            <ItemSkill
              icon={imgRedux}
              title={"Redux"}
              subMenu={["getState", "dispatch"]}
            />
            <ItemSkill
              icon={imgPhotoshop}
              title={"Photoshop"}
              subMenu={[
                "Create Logo",
                "Create Poster",
                "Use site templates",
                "Edit photo",
              ]}
            />
            <ItemSkill
              icon={imgGit}
              title={"Git"}
              subMenu={["Use in GitBash", "Use in GitHub Desktop"]}
            />
          </div>
        </div>
        <div className={style.additiona}>
          <h2>Additional</h2>
        </div>
      </div>
    </div>
  );
};
export default InfoAboutMe;
