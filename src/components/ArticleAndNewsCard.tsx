/* eslint-disable @next/next/no-img-element */
interface ImageList {
  imgPath: string;
  fillImgPath?: string;
}
export default function ArticleAndNewsCard(props: ImageList) {
  return (
    <>
      <div className="card card-side card-normal bg-base-100 shadow-xl max-w-[40rem] h-full sm:flex max-sm:flex-col ">
        <figure  className="container rounded max-sm:rounded-t-3xl sm:rounded-l-2xl   ">
          <img
            className="h-full "
            src={props.imgPath}
            alt="Movie"
          />
          <img
            style={{ opacity: "100%" ,borderBottomLeftRadius:'0%'}}
            className="h-[100%] fillimg"
            src={props.fillImgPath}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </>
  );
}
