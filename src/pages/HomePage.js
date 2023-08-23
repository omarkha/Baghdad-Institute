import React from "react";
import "../index.css";
import bg from "../media/bg24.webp";
import bg2 from "../media/bg.jpg";
import coding from "../media/coding.jpg";
import copywriting from "../media/copywriting.jpg";
import marketing from "../media/analytics.jpg";
import english from "../media/bg11.webp";
import graphics from "../media/graphics.jpg";
import entrepreneurship from "../media/handshake.jpg";
import intrologo from "../media/TIB2.png";
import emblem from "../media/iraq.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import bismallah from "../media/bismallah.png";
import { Parallax } from "react-parallax";
import atm from "../media/laptop.png";
import badge from "../media/badge.png";

const HomePage = () => {
  return (
    <div>
      <div className="hidden-bg" />
      <Parallax className="intro-wrapper" bgImage={bg} strength={500}>
        <div className="container">
          <div className="home-intro">
            <div className="intro-marketing">
              <div className="usp">
                <h3>
                  تعلم ريادة الاعمال, ابني شركات مربحة خلال 6 اشهر وانت في
                  المنزل
                </h3>

                {/* <h4>
                  استرخي في بيتك وتعلم فنون الثروة من خلال برامجنا المركزة
                </h4> */}
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      <div className="headline-wrapper">
        <div className="container">
          <div className="cta">
            <button className="cta-find-programs mx-1">تعرف على المعهد</button>
            <button className="cta-find-programs mx-1" id="cta-btn2">
              البرنامج الدراسي
            </button>
          </div>

          <div className="home-copy">
            <div className="atm" style={{ backgroundImage: `url(${atm})` }} />
            <p className="mt-5">
              العراق منبع العباقرة.,يتخرج اللالاف من طلبة الجامعات كل سنة. لكن
              اليوم في العراق, الخريجين يواجهون نحديات كبيرة لايجاد الوضائف
              المناسبة. فيصبح الكثير من ذوي الشهادات الجامعية يلجئون الى السفر,
              الغربة, ويخسرهم العراق
              <br />
              <br />
              الطالب المجتهد ثروة وطنية ثمينة. لذلك{" "}
              <span>موسسة كنز بغداد للاعمال</span> تقدم لك برنامج دراسي نموذجي و
              متكامل يهدف لتحوليك الى قيادي في ثورة الاعمار. يوم بعد يوم سوف
              تتعلم بناء شركات ومشاريع رابحة.
            </p>
          </div>
        </div>
      </div>

      <div className="diff-wrapper">
        <section>
          <div className="home-diff">
            <div>
              <p>
                <strong> تعلم احدث العلوم التكنلوجية.</strong> التكنلوجيا في
                تقدم سريع. لكن سوف تتعرف على كيفية استخدام الذكاء الاصطناعي
                ومواكبة التطورات العالمية. وما نقدمه لك من علم سوف يجعلك تواكب
                التقدمات قبل حدوثها. ببساطة لانك سوف تتعلم هندسة البرمجيات وتصبح
                تفهم التكنلوجيا بشكل متكامل. مما يجعلك تعلم كيفية الاستفادة من
                التكنلوجيا في مجال عملك. وهذا سوف يتيح لك خيارات وامكانيات اكثر
                لتحقيق اهدافك العملية
              </p>
            </div>
            <div>
              <p>
                <strong>امتياز خدمتنا اهم جزء في مؤسستنا.</strong> واهم جزء من
                خدمتنا هي جودة المادة وجودة القائها. سوف تتعلم من خبراء حاصلين
                على شهادات من مؤسسات علمية مرموقة ويمتلكون خبرة مهنية. نحن نقوم
                باختيار الافضل من الافضل لكي نجعل تجربة تعليمك تجعل منك خبير في
                ريادة الاعمال.
              </p>
            </div>

            <div>
              <p>
                <strong>التعارف المهني هو اهم مهاراة تتملكها.</strong> لان قدرتك
                على التنسيق مع الاخرين تجعلك تستطيع ان تتعامل مع فريق عملك. ونحن
                نتيح لك الكثير من المعارف المهنية. طلاب ومهنيين, سوف تحصل على
                معارف مفيدة لك في التعلم وايجاد العمل. اذا واجهتك اي عقبلت او
                اسئلة يمكنك استشارة احد من الجروب.
              </p>
            </div>
            <div>
              <p>
                <strong>تخرج بشاهدات معترفة.</strong> حينما تكمل درس من الدروس
                التي نقدمها لك سوف يتم امتحانك وعندمى تنجح تحصل على شهادة لذلك
                الموضوع. كل من هذه الشهادات المختلفة هدفها تكوين رواد اعمال
                ومهنيين على مستوى عالمي. لكن اذا اردت ان تعمل في مجال معيا
                كالتسويق او البرمجة فيكمن لك مع الشهادة في رفع حضوضك في نيل عمل
                في ذلك المجال.
              </p>
            </div>

            <div>
              <p>
                <strong>تجربة تعليمية نموذجية.</strong> هدفنا الاساسي من هذا
                المعهد هو تقديم قيايين ورواد اعمال من شئنهم اضافة بصمة ايجابية
                على العراق. فكل درس من الدروس المقدمة سوف ياخذ بعين الاعتبار هذا
                الهدف. حتى تكون لك تجربة تعليمية متكاملة.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="programs-wrapper">
        <div className="container">
          <div className="home-programs">
            <div className="program">
              <div
                className="img"
                style={{ backgroundImage: `url(${english})` }}
              />

              <div className="desc">
                <h5>
                  تأليف الاعلانانت <br />
                  Copywriting
                </h5>

                <h3>
                  في هذا الكورس سوف تتعلم كيف تستخدم الكلماتك لاهداف مفيدة في
                  حياتك الشخصية والمهنية وسوف تتقن فن وعلم الاقناع خاصتا في مجال
                  الاعلانات.
                </h3>
              </div>
            </div>

            <div className="program">
              <div
                className="img"
                style={{ backgroundImage: `url(${coding})` }}
              />
              <div className="desc">
                <h5>
                  هندسة البرمجيات <br /> Software Engineering
                </h5>

                <h3>
                  ستستطيع صناعة مواقع, ومنتجاح الكترونية. اهم ما تتعلمه من هذا
                  الكورس هو مهارات ايجاد الحلول للمعقبات, روح التحدي, ومعرفة
                  جيدة عن التكنلوجيا. من خلال هذا الكورس سوف تتعلم برمجة الواجهة
                  وايضا برمجة ما خلف الكواليس.
                </h3>
              </div>
            </div>

            <div className="program">
              <div
                className="img"
                style={{ backgroundImage: `url(${marketing})` }}
              />
              <div className="desc">
                <h5>
                  التسويق <br /> Marketing
                </h5>
                <p></p>
              </div>
            </div>

            <div className="program">
              <div
                className="img"
                style={{ backgroundImage: `url(${entrepreneurship})` }}
              />
              <div className="desc">
                <h5>
                  ريادة الاعمال <br /> Entrepreneurship
                </h5>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-wrapper">
        <div className="container">
          <div className="home-faq">
            <div>
              <h3>كم هي مدة البرنامج؟</h3>
              <p>
                تكملة جميع الكورسات سوف ياخذ من 4 الى 6 اشهر. وتلك الفترة كافية
                لجعلك اكثر من مستعد لبدئ مسيرتك المهنية. انت من تحدد سرعة تعلمك
              </p>
            </div>
            <div>
              <h3>هل هنالك امتحانات؟</h3>
              <p>
                نعم. هنالك امتحان واحد في نهاية كل كورس. ويتوجب عليك في نهاية
                الكورس ان تحضر المشاريع التي يجب ان تعمل عليها. هذه المشاريع
                ستساعدك في الحصول على وضيفة
              </p>
            </div>
            <div>
              <h3>ماذا عن الوضائف؟</h3>
              <p>
                عندمى تتعلم المهارات التي سوف تكتسبها سوف تصبح قادر على العمل في
                مجالات عديدة. لاثبات جدارتك سوف نوفر لك شهادة بعد نجاحك في
                الكورسات. ولكن كل ما تحتاجه الشركات هو الاطلاع على مشارعيك التي
                سوف تعمل عليها
              </p>
            </div>
            <div>
              <h3>ماذا اذا لم انجح الامتحان؟</h3>
              <p>
                اذا فشلت في اجتياز الامتحان. لديك عدد لا نهائي من الفرص لاعادته
                .فتستطيع ان تعيد الامتحان في توقيت اخر بشرط دفع 25$ لتغطية تكلفة
                المعلم.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-wrapper">
        <div className="container">
          <div className="home-cta">
            <p>
              نحن موجودين على مدار الساعة للاجابة على اسئلتك الخاصة. فقط ضع
              عنوان بريدك الالكتروني ومسؤل منا سوف يكون في خدمتك
            </p>
            <form>
              <input type="text" placeholder="ها هو عنوان بريدي الاكتروني..." />
              <button type="submit">اريد التواصل</button>
            </form>
          </div>
        </div>
      </div>
      <div className="benefits-wrapper">
        <div className="container">
          <div className="home-benefits">
            <a className="navbar-brand" href="#">
              <div
                className="emblem"
                style={{ backgroundImage: `url(${emblem})` }}
              />
              <div className="brand">
                <div>
                  <h1 className="brandnamear">مؤسسة كنز للاعمال</h1>

                  <h1 className="brandname">Kenz Institute of Business</h1>
                  <h1 className="tagline">نبادر ونبتكر لعراق عظيم</h1>
                </div>
              </div>
            </a>
            <h4 className="h1">قيمة البرنامج</h4>
            <ul>
              <li>
                كورس في البرمجة مع الشهادة.
                <strong> 500 دولار اميركي</strong>
                <BsFillPatchCheckFill className="checkmark" />
              </li>
              <li>
                كورس في التسويق مع الشهادة.
                <strong> 500 دولار اميركي</strong>
                <BsFillPatchCheckFill className="checkmark" />
              </li>
              <li>
                كورس في اللغة الانجليزية مع الشهادة.
                <strong> 250 دولار اميركي</strong>
                <BsFillPatchCheckFill className="checkmark" />
              </li>
              <li>
                كورس في ريادة الاعمال مع الشهادة.{" "}
                <strong> 1,000 دولار اميركي</strong>
                <BsFillPatchCheckFill className="checkmark" />
              </li>
              <li>
                اشتراك مدى الحياة في مجموعة خاصة من المهنيين.{" "}
                <strong> 500 دولار اميركي</strong>
                <BsFillPatchCheckFill className="checkmark" />
              </li>
              <li>
                محاضرات دسمة في بث مباشر بين حين وحين.
                <strong> 2,000 دولار اميركي</strong>
                <BsFillPatchCheckFill className="checkmark" />
              </li>
              <li>
                {" "}
                القيمة الكلية للبرنامج <strong id="totalvalue">
                  4,750$
                </strong>{" "}
                على اقل تقدير
                <BsFillPatchCheckFill className="checkmark" />
              </li>{" "}
              <hr />
            </ul>
            <div
              className="badge"
              style={{
                backgroundImage: `url(${badge})`,
              }}
            ></div>
            <div>
              <h5 className="h3 text-light">
                {" "}
                بـ <u id="totalprice">495$</u> فقط احصل على هذا البرنامج كامل
                مدى الحياة
              </h5>
              <button>اشترك الان</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
