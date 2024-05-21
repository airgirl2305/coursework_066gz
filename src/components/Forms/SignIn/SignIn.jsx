import styles from './Forms.module.css';
export const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <section className="col-5 mx-auto pt-5">
        <h1 className="text-center my-5">Authorization</h1>
        <form action="php/authorization-processor.php" method="POST">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <span className="material-icons input-icon">mark_email_read</span>
              </div>
            </div>
            <input
              autocomplete="email"
              className="form-control form-control-lg"
              minlength="2"
              name="email"
              onblur="this.placeholder='Email'"
              onfocus="this.placeholder=''"
              placeholder="Email"
              required
              type="email"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <span className="material-icons input-icon">password</span>
              </div>
            </div>
            <input
              autocomplete="current-password"
              className="form-control form-control-lg"
              id="formPass"
              minlength="2"
              onblur="this.placeholder='Your password'"
              onfocus="this.placeholder=''"
              placeholder="Your password"
              required
              type="password"
              name="password"
            />
            <div className="input-group-text">
            <span
              className="material-icons eye-icon"
              onmousedown="formPass.type='text';
               this.nextElementSibling.hidden=false; this.hidden='true';"
            >visibility</span
            >
              <span
                className="material-icons eye-icon"
                hidden
                onmouseup="formPass.type = 'password'; this.previousElementSibling.hidden = false; this.hidden = true;"
              >visibility_off</span
              >
            </div>
          </div>
          <div className="input-group">
            <input className="btn btn-block btn-lg button-auth" type="submit" value="send" />
          </div>
        </form>
      </section>
      </div>
  )
}
