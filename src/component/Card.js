import logo from "./logo512.png";
import styles from "./Card.module.css";
const Card = () => {
  const data = {
    email: "aliesfandani1382@gmail.com",
    pass: "Asfali12",
  };
  return (
    <div className="card ">
      <div className=" col-12 row justify-content-center ">
        <img
          src={logo}
          className={`${styles.img} d-flex align-items-center`}
        ></img>
      </div>

      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            id="btn"
            className="btn btn-outline-primary padding-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );


};

export default Card;
