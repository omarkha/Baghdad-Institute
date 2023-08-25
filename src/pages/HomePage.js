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
                <h3>تعلم ريادة الاعمال وكن قيادي في ثورة الاعمار</h3>

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
            <p className="mt-5">
              تحقيق أحلام الشعب العراقي ليس مجرد حلم بعيد، بل أصبح حقيقة ملموسة.
              فالعراق يحتاج اليوم إلى رواد أعمال يساهمون في التقدم التكنولوجي
              والنمو الاقتصادي، كما يساعدون على خلق فرص عمل. <br />
              <br />
              لذلك، يقدم معهد البرق لك برنامجًا متكاملاً ونموذجيًا يسعى الى
              تأهيل رواد الأعمال المبدعين، وتزويدهم بالمهارات اللازمة لحل مشاكل
              المجتمع وتلبية احتياجاته. فإذا كنت شخصية ذات بصيرة، ذات شغف،
              وشخصية قيادية، فإن معهد البرق في خدمتك
            </p>
          </div>
        </div>
      </div>

      <div className="diff-wrapper">
        <section className="container">
          <div className="home-diff">
            <div>
              <img src={require("../media/bg13.jpg")} />
              <span>
                <strong>المهارات التكنلوجية</strong>{" "}
                <p>
                  بعد اكمال الكورس سوف يكون لديك مهارات تكنلوجية تساعدك في
                  مشاريعك. ونقدم ايضا دورة الهندسة البرمجية الكاملة التي يمكن من
                  تعلمها أن تساعد رواد الأعمال في بناء مواقعهم الإلكترونية
                  وتطبيقاتهم، وتطوير منتجات وخدمات جديدة تتناسب مع احتياجات
                  عملائهم
                </p>
              </span>
            </div>
            <div>
              <img src={require("../media/bg9.jpg")} />
              <span>
                <strong>معلمين ذو كفائة عالية</strong>
                <p>
                  متركز مؤسستنا على جودة المادة والقائمين عليها، حيث يتم تدريس
                  المواد من قبل خبراء حاصلين على شهادات من مؤسسات علمية مرموقة
                  ويمتلكون خبرة مهنية. نحن نختار الأفضل لكي نجعل تجربة تعليمك
                  تجعل منك خبير في ريادة الأعمال. وتعد عملية التوظيف لدينا دقيقة
                  لضمان اختيار أفضل المرشحين والذين يتمتعون بالشغف والإصرار
                  لمساعدة المؤسسة على النجاح. وبالإضافة إلى ذلك، فإن الانضمام
                  إلى مؤسستنا يوفر لك فرصًا لتطوير مهاراتك وخبراتك في ريادة
                  الأعمال.
                </p>
              </span>
            </div>

            <div>
              <img src={require("../media/ministry.jpg")} />

              <span>
                <strong> شاهدات معترف بها</strong>{" "}
                <p>
                  تقدم أكاديمية ريادة الأعمال الخاصة بنا شهادات معترف بها في
                  العراق والشرق الأوسط. عند اكتمال درس من الدروس التي نقدمها لك،
                  سيتم اختبارك وعند نجاحك، ستحصل على شهادة في ذلك الموضوع. تهدف
                  كل هذه الشهادات المختلفة إلى تأهيل رواد الأعمال والمهنيين على
                  مستوى عالمي. إذا كنت ترغب في العمل في مجال معين مثل التسويق أو
                  البرمجة، فإن حصولك على شهادة سيساعدك في رفع فرصك في الحصول على
                  وظيفة في ذلك المجال.
                </p>
              </span>
            </div>

            <div>
              <img src={require("../media/strategy.jpg")} />
              <span>
                <strong>استراتيجية تعليمية منتجة</strong>
                <p>
                  اذا كنت ترغب في بدء شركة ناجحة، فإن كل دورة في برنامجك الريادي
                  تم تصميمها بعناية لتحقيق هذا الهدف. يتم تكميل كل دورة بالأخرى
                  لتحقيق هدف إنتاج رائد أعمال متكامل. سوف تحصل على المهارات
                  والمعرفة اللازمة لتحويل شخصيتك إلى شخصية قوية وناجحة في عالم
                  ريادة الأعمال.
                </p>
              </span>
            </div>
            <div>
              <img src={require("../media/networking2.jpg")} />
              <span>
                <strong>فرص للتعراف المهني</strong>
                <p>
                  التعارف المهني هو مهارة مهمة للغاية، حيث أن قدرتك على التنسيق
                  مع الآخرين تجعلك قادرًا على التعامل مع فريق عملك. توفر
                  الأكاديمية الريادية هذه عبر الإنترنت الكثير من الموارد
                  المهنية، حيث يمكن للطلاب والمهنيين الحصول على معارف مفيدة لهم
                  في التعلم والعثور على العمل. يمكن للطلاب أيضًا الاستفادة من
                  فعاليات التواصل وبرامج التوجيه التي توفرها الأكاديمية للتواصل
                  مع الخريجين أو المهنيين في الصناعة. بالإضافة إلى ذلك، توفر
                  الأكاديمية خدمات مهنية مثل مراجعات السيرة الذاتية وإعداد
                  المقابلات لمساعدة الطلاب على التحضير لفرص التواصل
                </p>
              </span>
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
                ستساعدك في الحصول على وضيفة. بعد كل درس سوف يكون هنالك امتحان
                صغير وبسيط للتاكد من وقياس فهم الطالب للمادة. بعد النجاح في
                الامتحان سوف يتم حسب نقاط دراسية له. اذا كان اداء الطالب مميز
                سوف يكون له فرصة عمل مع الشركة فور ما ينتهي من البرنامج. الوضائف
                المتاحة هي مرشد تعليمي للاكاديمية وايضا يدخل في بيئة عملية عندما
                يعمل على مشاريع الشركة.
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
            <div>
              <h3>ماهية طريقة التعليم؟</h3>
              <p>
                كل صف سيتكون من 20 طالب. سوف يكون هنالك غرفة تطبيق سلاك او
                ديسكورد جماعي للطلبة. وسوف يكون هنالك صف مختلف من حيث تشكيلة
                الطلبة لكل كورس. الهدف من هذه القناة هو مساعدة الطلاب بعضهم
                البعض. سيكون هنالك ايضا قناة عامة على السلاك او الديسكورد حيث
                يستطيع الكل ان يتكلم فيها. هنالك اربع كورسات متاحة. هندسة
                البرمجبات, التسويق, تأليف الاعلانات, وريادة الاعمال. يبدء الطالب
                مع كورس هندسة البرمجيات, وكورس ريادة الاعمال وتمتد هذان الكورسات
                الى نهاية مدة البرنامج. بعد ثلاثة اشهر من البداية يضاف لهذان
                الكورسان كورسات اخر وهم كورس تأليف الاعلانات وكورس التسويق.
              </p>
            </div>
            <div>
              <h3>كيف هي البيئة الدراسية؟</h3>
              <p>
                يسعى المعهد دائمًا لخلق بيئة تعليمية إيجابية ومثيرة لكل طالب.
                وهنالك اجرائات وقائية تجاه السلوكيات الغير حميدة كالاسائة,
                الاهانة, التحرش, التنمر, او اي شيئ من هذا القبيل. نحاول ان نخلق
                بيئة تعاونية حيث يعم بين الطلبة الاحترام والاخلاق العراقية
                المعهودة.
              </p>
            </div>
          </div>
          <h5 className="h5 my-4 text-light">
            انقر هنا لمزيد من الاسئلة والاجوبة
          </h5>
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
                  <h1 className="brandnamear">اكاديمية البرق لريادة الاعمال</h1>

                  <h1 className="brandname">Al-Barq Entrepreneural Academy</h1>
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
