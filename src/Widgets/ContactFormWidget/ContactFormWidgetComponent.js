import * as React from "react";
import * as Scrivito from "scrivito";
import "./contactForm.html";
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent("ContactFormWidget", ({ widget }) => {
  const classNames = ["row"];

  if (widget.get("backgroundColor") === "transparent") {
    classNames.push("card-white-transparent");
  } else {
    classNames.push("floating-label", "card-theme", "card", "card-padding");
  }

  return (
    <div className={classNames.join(" ")}>
      <form className="row" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="d-none">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <div className="col-sm-6">
          <div className="form-group">

            <input
              className="form-control form-control-lg"
              id="contactName"
              name="contactName"
              placeholder="Name"
              type="text"
              required
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">

            <input
              className="form-control form-control-lg"
              id="contactEmail"
              name="contactEmail"
              placeholder="E-Mail"
              type="email"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">

            <input
              className="form-control form-control-lg"
              id="contactTelephone"
              name="contactTelephone"
              placeholder="Telefonnummer"
              type="text"
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">

            <input
              className="form-control form-control-lg"
              id="contactSubject"
              name="contactSubject"
              placeholder="Betreff"
              type="text"
            />
          </div>
        </div>

        <div className="col-sm-12">
          <div className="form-group">

            <textarea
              className="form-control form-control-lg"
              rows="3"
              id="contactMessage"
              name="contactMessage"
              placeholder="Ihre Nachricht ..."
              required
            />
          </div>
          {widget.get("agreementText") && (
            <div className="form-group form-check">
              <input
                className="form-check-input"
                id="agreementTextCheck"
                type="checkbox"
                name="contactAgreement"
                value={widget.get("agreementText")}
                required
              />
              <label className="form-check-label" htmlFor="agreementTextCheck">
                {widget.get("agreementText")}
              </label>
            </div>
          )}
          </div>

        <div className="col-sm-12">
        <b>Wann können wir Sie kontaktieren?</b>
        </div>
        
        <div className="col-sm-5">
          <div className="form-group">
            <label htmlFor="whencontact">Vormittags</label>
            <input
              className="form-control form-control-lg"
              id="whencontact"
              name="whencontact"
              type="radio"
              value="vormittags"
            />
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group">
            <label htmlFor="whencontact2">Nachmittags</label>
            <input
              className="form-control form-control-lg"
              id="whencontact2"
              name="whencontact"
              value="nachmittags"
              type="radio"
            />
          </div>
        </div>

        <div className="col-sm-12">
        <b>Wie können wir Sie kontaktieren?</b>
        </div>
        <div className="col-sm-5">

          <div className="form-group">
            <label htmlFor="howcontact">Per E-Mail</label>
            <input
              className="form-control form-control-lg"
              id="howcontact"
              name="howcontact"
              type="radio"
              value="email"
            />
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group">
            <label htmlFor="howcontact2">Telefonisch</label>
            <input
              className="form-control form-control-lg"
              id="howcontact2"
              name="howcontact"
              value="telefonisch"
              type="radio"
            />
          </div>
        </div>

        <div className="col-sm-12">
        <b>Ihr Interesse?</b>
        </div>
        <div className="col-sm-5">

          <div className="form-group">
            <label htmlFor="interest">Interesse an eQuatronic</label>
            <input
              className="form-control form-control-lg"
              id="interest"
              name="interest"
              type="radio"
              value="equatronic"
            />
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group">
            <label htmlFor="interest2">Partner werden</label>
            <input
              className="form-control form-control-lg"
              id="interest2"
              name="interest"
              value="partner werden"
              type="radio"
            />
          </div>
        </div>


        <div className="col-sm-6">
          <button className="btn btn-secondary btn-block" type="submit">
            {widget.get("buttonText") || "Nachricht senden"}
          </button>
        </div>
      </form>
    </div>
  );
});
