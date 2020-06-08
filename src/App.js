import React, { useState } from "react";
import "./App.css";

const genereatedSignature = (
  name,
  mail,
  role,
  telephone
) => `<table style="width: 525px; font-size: 11pt; font-family: Roboto, sans-serif; background-color: white" cellspacing="0" cellpadding="0">
<tbody>
    <tr>
    <td style="font-size: 10pt; font-family: Arial, sans-serif; border-right: 1px solid; border-right-color: #fb6303; width: 85px; vertical-align: top; text-align: center; padding: 0 20px;" rowspan="6" valign="top"><a href="https://www.my-company.com/" target="_blank" rel="noopener"><img style="width: 85px; height: 85px; border: 0;" src="https://quinck-open.s3-eu-west-1.amazonaws.com/logo.png" alt="Logo" border="0" /></a>
    <h2 style="margin: 0;">Quinck</h2>
    </td>
        <td style="padding-left: 10px;">
            <table cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td style="font-size: 10pt; color: #0079ac; font-family: Arial, sans-serif; width: 400px; padding-bottom: 5px; padding-left: 10px; vertical-align: top;" valign="top"><strong><span style="font-size: 11pt; font-family: Arial, sans-serif; color: #fb6303;">${name}</span></strong><strong style="font-family: Arial, sans-serif; font-size: 11pt; color: #000000;"> | ${role} </strong></td>
                    </tr>
                    <tr>
                        <td style="font-size: 10pt; color: #444444; font-family: Arial, sans-serif; padding-bottom: 5px; padding-top: 5px; padding-left: 10px; vertical-align: top; line-height: 17px;" valign="top"><span style="color: #fb6303;"><strong>a: </strong></span><span style="font-size: 10pt; font-family: Arial, sans-serif; color: #000000;"> | Street, City </span> <span style="font-size: 10pt; font-family: Arial, sans-serif; color: #000000;"> | Zip Code, Country</span><br
                            /><span style="color: #fb6303;"><strong>e:</strong></span><span style="font-size: 10pt; font-family: Arial, sans-serif; color: #000000;"> ${mail}</span> | <span style="color: #fb6303;"><strong>w:</strong></span>                                <a style="text-decoration: none;" href="http://www.my-company.com" target="_blank" rel="noopener"><span style="font-size: 10pt; font-family: Arial, sans-serif; color: #000000;"> www.quinck.io</span></a><br /> <span style="color: #fb6303;"><strong>m:</strong></span>
                            <span style="font-size: 10pt; font-family: Arial, sans-serif; color: #000000;"> +39 ${telephone}</span> | <span style="color: #fb6303;"><strong>p:</strong></span> <span style="font-size: 10pt; font-family: Arial, sans-serif; color: #000000;"> (800) 555-0199</span></td>
                    </tr>
                    <tr>
                        <td style="font-size: 10pt; font-family: Arial, sans-serif; padding-bottom: 0px; padding-top: 5px; padding-left: 10px; vertical-align: bottom; display: flex; align-items: center" valign="bottom">
                            <a href="https://www.facebook.com/MyCompany" target="_blank" rel="noopener"><img style="border: 0; height: 19px; width: 19px; margin-right:10px" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator-dm/bease-fox/fb.png" alt="facebook icon" width="19" border="0" /></a>
                            <!-- <a href="https://twitter.com/MyCompany404" target="_blank" rel="noopener"><img style="border: 0; height: 19px; width: 19px;" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator-dm/bease-fox/tt.png" alt="twitter icon" width="19" border="0" /></a> -->
                            <!-- <a href="https://www.youtube.com/user/MyCompanyChannel" target="_blank" rel="noopener"><img style="border: 0; height: 19px; width: 19px;" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator-dm/bease-fox/yt.png" alt="youtube icon" width="19" border="0" /></a> -->
                            <a href="https://www.linkedin.com/company/mycompany404" target="_blank" rel="noopener"><img style="border: 0; height: 19px; width: 19px;; margin-right:10px" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator-dm/bease-fox/ln.png" alt="linkedin icon" width="19" border="0" /></a>
                            <a href="https://www.instagram.com/mycompany404/" target="_blank" rel="noopener"><img style="border: 0; height: 19px; width: 19px;" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator-dm/bease-fox/it.png" alt="instagram icon" width="19" border="0" /></a>
                            <!-- <a href="https://pinterest.com/mycompany404/" target="_blank" rel="noopener"><img style="border: 0; height: 19px; width: 19px;" src="https://codetwocdn.azureedge.net/images/mail-signatures/generator-dm/bease-fox/pt.png" alt="pinterest icon" width="19" border="0" /></a> --></td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</tbody>
</table>
`;

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [role, setRole] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [isGenereated, setGenerated] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setGenerated(true);
  };
  const reset = () => {
    setName("");
    setMail("");
    setRole("");
    setTelephone(null);
    setGenerated(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quinck Signature Generator</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="inputs-container">
            <label>
              Nome:
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Mail:
              <input
                type="email"
                value={mail}
                required
                onChange={(e) => setMail(e.target.value)}
              />
            </label>
            <label>
              Ruolo:
              <input
                type="text"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </label>
            <label>
              Telefono:
              <input
                type="number"
                required
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="generator-button">
            {" "}
            Genera!
          </button>
        </form>
        {isGenereated && (
          <div>
            {/* <pre>
              <code>{genereatedSignature(name, mail, role, telephone)}</code>
            </pre> */}
            <div
              dangerouslySetInnerHTML={{
                __html: genereatedSignature(name, mail, role, telephone),
              }}
            ></div>
            {/* <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText(
                  genereatedSignature(name, mail, role, telephone)
                )
              }
            >
              CLICCA PER COPIARE SUBITO!
            </button> */}
            <button type="reset" onClick={reset}>
              Reset
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
