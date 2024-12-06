import React from "react";
import { TiDelete } from "react-icons/ti";
const GorevleriGoster = ({ yapilacak, setYapilacak }) => {
  return (
    <div>
      {yapilacak.map((a) => (
        <div
          key={a.id}
          className={a.isDone === true ? "done" : "gorev"}
          onDoubleClick={() =>
            setYapilacak(
              yapilacak.map((dizi) =>
                dizi.id === a.id ? { ...dizi, isDone: !dizi.isDone } : dizi
              )
            )
          }
        >
        {/* elimizdeki data(database) da kalıcı değişiklik yapacağız, map dizide döner ve değişiklik yapar ama kalıcı tutmaz, bunun için setYapilacakta (tamircide) map lenmeli. map le elinizdeki datada dönersiniz, bu sırada o an tıkladığınız a ile kastedilen elemanın id si ile dizideki id eşleşiyorsa orada durup değişiklik yaparız. mesela 3 id li elemanın süslüsünde eşleşme oldu. süslünün içinde diğer key ler kalsın sadece isdone değişsin istediğimiz için, diğerlerini elleme manasında ...dizi, yazar üzerine override ederek, isDone:!dizi.isDone yazarız, yani eşleşen süslünün içindeki is Done da ne yazıyorsa onun tersiyle değiştir */}
          <h3>
            {a.text}

            <TiDelete
              style={{ color: "red" }}
              onClick={() =>
                setYapilacak(yapilacak.filter((x) => x.id !== a.id))
              }
            />
          </h3>

          <h6>{a.day} </h6>
        </div>
      ))}
    </div>
  );
};

export default GorevleriGoster;
