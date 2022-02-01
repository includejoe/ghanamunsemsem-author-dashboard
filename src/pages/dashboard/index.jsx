import React, { useContext } from "react";

import { SideBarContext } from "../../contexts/sideBarContext";
import { Container, SideBar, ContentContainer } from "./styles";

export default function Dashboard() {
  const { isShowing } = useContext(SideBarContext);

  return (
    <Container>
      <SideBar isShowing={isShowing}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum
        rerum possimus! Iste libero debitis at placeat nihil sunt ratione
        quibusdam atque, veniam perspiciatis eligendi, saepe aliquid illo
        molestiae beatae?
      </SideBar>
      <ContentContainer isShowing={isShowing}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt cum
        adipisci tempora sed autem. Illo sunt iusto eligendi error beatae
        maiores, placeat harum voluptatum velit quae, dolorum praesentium
        repellendus rerum quo! Autem pariatur provident accusamus debitis iusto?
        Ducimus maiores dolore libero, nemo ipsa dignissimos doloribus numquam
        atque sed consequuntur reiciendis ipsum quisquam odio illum magni,
        molestias optio? Sed voluptatem qui delectus. Accusamus dolore velit
        ullam quisquam est officia saepe, impedit suscipit, tempora
        reprehenderit eligendi quas cumque natus maiores? Ducimus, labore sit
        eligendi, in laborum et sunt blanditiis velit hic aperiam perferendis
        laboriosam. Voluptas enim reiciendis nesciunt magnam hic illo provident
        molestiae velit corrupti cupiditate? Officia maiores dolor eaque et
        mollitia. Id excepturi ipsa delectus laboriosam exercitationem
        doloremque reprehenderit dolore. Sequi fugiat possimus minus, sapiente
        aspernatur eum assumenda dolorum hic. Veritatis laudantium excepturi
        quidem delectus deserunt unde molestias, dolores nulla maxime mollitia
        doloremque distinctio, ipsum, qui quas itaque odio sapiente! Velit ea
        quia sit totam molestiae odit vel officia deserunt blanditiis et quo
        sint ut necessitatibus itaque asperiores minus quibusdam id aut fuga
        facere quam doloremque, mollitia deleniti. Illo corrupti quam similique
        laborum laudantium fugiat omnis, eveniet deleniti fuga maxime nihil qui
        reiciendis repudiandae enim sunt nisi autem! Nisi non laborum adipisci
        delectus sit. Deserunt perferendis excepturi, doloribus ipsa facilis
        veniam ratione nisi nam magnam beatae? Corrupti sequi quod quia nemo
        maxime rerum. Corrupti sequi illum optio repellendus odit. Atque,
        repellat dolore! Exercitationem, rem quaerat cum iure a quo iste minus
        aperiam obcaecati necessitatibus perspiciatis consequuntur similique
        quod mollitia vitae ipsam debitis laudantium recusandae. Animi
        dignissimos nostrum placeat! Fugit quisquam sapiente at corrupti
        explicabo doloribus odio doloremque minus voluptate unde eius tempora
        nisi obcaecati aperiam eum, perspiciatis harum, enim facere quibusdam
        beatae dolorum tempore maxime? Quae quisquam voluptates quia dignissimos
        vel. Nisi nostrum quae vero nobis dolor pariatur corrupti fuga esse
        vitae sit nulla distinctio velit eaque blanditiis itaque, perferendis
        molestias accusamus quam quos! Voluptatum molestias labore ad beatae est
        itaque ratione, pariatur qui dolorem ducimus deserunt temporibus
        voluptatem blanditiis dignissimos a delectus ea atque et, velit minus
        illum. Deleniti iusto quasi quam. Facere ea obcaecati assumenda pariatur
        nemo eveniet dolore quo voluptatibus consectetur, iure optio labore.
        Assumenda quaerat ullam aliquam eos, mollitia veritatis sint rem nam,
        eveniet veniam doloremque dignissimos at incidunt delectus officia ipsam
        earum blanditiis quidem quisquam sequi culpa quibusdam fugiat nemo
        tenetur? Harum autem vitae quaerat aliquid nobis officiis? Adipisci
        minima aut quisquam quidem cum quam provident quo, cumque blanditiis
        fugiat hic distinctio quis odit explicabo, ratione necessitatibus velit
        quas, autem reprehenderit nobis eius amet ab. Dolorum beatae aperiam ab
        officiis ipsum? Harum est, aliquam totam iste hic placeat, ullam
        quisquam nam, dolorum cum similique a facere quibusdam expedita dolore
        earum tenetur provident nisi dolor reiciendis nulla doloremque illum.
        Repellat molestiae pariatur itaque quas temporibus blanditiis vel
        dolorum quis nam ex? Fugit adipisci repudiandae vero numquam incidunt
        assumenda delectus! Sit, a soluta delectus et rerum quo ut deleniti
        necessitatibus. Totam hic pariatur expedita blanditiis accusantium amet
        harum quis quod, consequuntur accusamus nulla nesciunt fugiat quasi odit
        obcaecati?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Neque non quam, ratione amet perferendis earum cum voluptatem voluptate.
        Explicabo veritatis tenetur rem consequuntur sunt, officia quae numquam
        adipisci ad enim asperiores eveniet in distinctio. Eos iure iusto
        eligendi quos culpa vitae hic cum magni mollitia minus facilis officiis
        tempore at a sunt ullam eaque assumenda ratione quam, dolore
        exercitationem et, enim sit commodi. Beatae, quibusdam voluptatibus!
        Voluptatem corrupti non quisquam sunt! Explicabo maiores odio ab,
        consequuntur iusto suscipit cupiditate, error perferendis fuga totam
        recusandae necessitatibus tempore ea autem? Reiciendis, ut. Minus
        consequuntur omnis voluptatum quia maxime, assumenda eum sit quidem
        voluptates. Harum, minima consectetur nulla, dolorum nemo illum veniam
        eveniet quis consequuntur, pariatur repellat magni praesentium ea sequi!
        Saepe asperiores distinctio ratione similique corrupti ipsam sunt et
        molestiae quisquam fuga blanditiis cum excepturi, veniam quaerat
        exercitationem facilis sed rem? Corporis molestiae vel vitae esse,
        explicabo placeat non excepturi, voluptatem similique eligendi
        repellendus rerum officiis voluptas? Velit itaque maxime excepturi error
        alias ex ullam esse optio officia, minus dolor neque beatae nobis,
        similique aut hic iure in. Odio dolorum reiciendis maxime incidunt
        mollitia, blanditiis velit at dolores illum sapiente! Perferendis
        aperiam itaque dolorem temporibus, doloribus ut eos ducimus maxime nobis
        incidunt!
      </ContentContainer>
    </Container>
  );
}
