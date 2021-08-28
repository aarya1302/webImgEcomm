import "../style/profile/paymentForm.css";
import $ from "jquery";
import { useState } from "react";
import { Fade } from "react-bootstrap";
const PaymentForm = () => {
  var [addPayment, setAddPayment] = useState(false);
  const [method, setMethod] = useState("credit");
  var changeActive = (e) => {
    var id = e.currentTarget.id;
    if (e.currentTarget.id === "credit-card-btn") {
      $("#" + "paypal-btn").removeClass("active");
      setMethod("credit", 1000);
    } else {
      $("#" + "credit-card-btn").removeClass("active");
      setMethod("paypal");
    }
    $("#" + id).addClass("active", 1000);
  };

  var nav = (
    <div class="bg-white shadow-sm ">
      <ul
        role="tablist"
        class="nav bg-light nav-pills rounded nav-fill mb-3 row text-center"
      >
        <li class="col">
          <a
            onClick={changeActive}
            id="credit-card-btn"
            data-toggle="pill"
            href="#credit-card"
            class="nav-link active  "
          >
            <i class="fas fa-credit-card "></i> Credit Card
          </a>
        </li>
        <li class="col">
          <a
            data-toggle="pill"
            href="#paypal"
            class="nav-link "
            onClick={changeActive}
            id="paypal-btn"
          >
            <i class="fab fa-paypal mr-2"></i> Paypal
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div id="payment" className="fullWidth">
        {addPayment ? (
          <div id="paymentForm" class="container fadeIn text-center middle">
            <div className="col-lg-8 mt-5 mb-5">
              <div
                className="close"
                onClick={() => {
                  setAddPayment(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
              </div>

              <div class="row mb-4">
                <div class="col-lg-10 mx-auto text-center">
                  <h1 class="display-6">Add Payment Information</h1>
                </div>
              </div>
              <div class="row">
                <div class=" mx-auto">
                  <div class="card ">
                    <div class="card-header">
                      {nav}
                      <div class=" tab-content">
                        {method === "credit" ? (
                          <div id="credit-card" class=" fade show pt-3 ">
                            <form
                              role="form"
                              onsubmit="event.preventDefault()"
                              className="w-100"
                            >
                              <div class="form-group">
                                <label for="username">
                                  <h6>Card Owner</h6>
                                </label>
                                <input
                                  type="text"
                                  name="username"
                                  placeholder="Card Owner Name"
                                  required
                                  class="form-control "
                                />
                              </div>
                              <div class="form-group">
                                <label for="cardNumber">
                                  <h6>Card number</h6>
                                </label>
                                <div class="input-group">
                                  <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Valid card number"
                                    class="form-control "
                                    required
                                  />
                                  <div class="input-group-append">
                                    {" "}
                                    <span class="input-group-text text-muted">
                                      {" "}
                                      <i class="fab fa-cc-visa mx-1"></i>{" "}
                                      <i class="fab fa-cc-mastercard mx-1"></i>{" "}
                                      <i class="fab fa-cc-amex mx-1"></i>{" "}
                                    </span>{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-sm-8">
                                  <div class="form-group">
                                    {" "}
                                    <label>
                                      <span class="hidden-xs">
                                        <h6>Expiration Date</h6>
                                      </span>
                                    </label>
                                    <div class="input-group">
                                      {" "}
                                      <input
                                        type="number"
                                        placeholder="MM"
                                        name=""
                                        class="form-control"
                                        required
                                      />{" "}
                                      <input
                                        type="number"
                                        placeholder="YY"
                                        name=""
                                        class="form-control"
                                        required
                                      />{" "}
                                    </div>
                                  </div>
                                </div>
                                <div class="col-sm-4">
                                  <div class="form-group mb-4">
                                    {" "}
                                    <label
                                      data-toggle="tooltip"
                                      title="Three digit CV code on the back of your card"
                                    >
                                      <h6>
                                        CVV{" "}
                                        <i class="fa fa-question-circle d-inline"></i>
                                      </h6>
                                    </label>{" "}
                                    <input
                                      type="text"
                                      required
                                      class="form-control"
                                    />{" "}
                                  </div>
                                </div>
                              </div>
                              <div class="card-footer">
                                {" "}
                                <button
                                  type="button"
                                  class="subscribe btn btn-primary btn-block shadow-sm"
                                >
                                  {" "}
                                  Confirm Payment{" "}
                                </button>
                              </div>
                            </form>
                          </div>
                        ) : (
                          <div
                            id="paypal"
                            class="show fade pt-3 container text-center"
                          >
                            <h6 class="pb-2">
                              Select your paypal account type
                            </h6>
                            <div class="form-group container ">
                              {" "}
                              <label class="radio-inline">
                                {" "}
                                <input
                                  type="radio"
                                  name="optradio"
                                  checked
                                />{" "}
                                Domestic{" "}
                              </label>{" "}
                              <label class="radio-inline">
                                {" "}
                                <input
                                  type="radio"
                                  name="optradio"
                                  class="ml-5"
                                />
                                International{" "}
                              </label>
                            </div>
                            <p>
                              {" "}
                              <button type="button" class="btn btn-primary ">
                                <i class="fab fa-paypal mr-2"></i> Log into my
                                Paypal
                              </button>{" "}
                            </p>
                            <p class="text-muted">
                              {" "}
                              Note: After clicking on the button, you will be
                              directed to a secure gateway for payment. After
                              completing the payment process, you will be
                              redirected back to the website to view details of
                              your order.{" "}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container text-center fullScreen mt-5">
            <div>
              <h1 className="text-muted">No Payement Information Yet</h1>
              <br></br>
              <button
                className="btn btn-default btn-primary"
                onClick={() => {
                  setAddPayment(true);
                }}
              >
                + Add Payment Method
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default PaymentForm;
