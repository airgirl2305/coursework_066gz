import '../Forms.sass';

export const SignIn = () => {
  return (
    <div className="sign-in">
      <section className="col-5 mx-auto pt-5">
        <h1 className="text-center my-5">Вход</h1>
        <form action="php/authorization-processor.php" method="POST">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <span className="material-icons input-icon">mark_email_read</span>
              </div>
            </div>
            <input
              autoComplete="email"
              className="form-control form-control-lg"
              minLength="2"
              name="email"
              onBlur="this.placeholder='Email'"
              onFocus="this.placeholder=''"
              placeholder="Email"
              required
              type="email"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <span className="material-icons input-icon">пароль</span>
              </div>
            </div>
            <input
              autoComplete="current-password"
              className="form-control form-control-lg"
              id="formPass"
              minLength="2"
              onBlur="this.placeholder='Your password'"
              onFocus="this.placeholder=''"
              placeholder="Your password"
              required
              type="password"
              name="password"
            />
            <div className="input-group-text">
            <span
              className="material-icons eye-icon"
              onMouseDown="formPass.type='text';
               this.nextElementSibling.hidden=false; this.hidden='true';"
            >visibility</span
            >
              <span
                className="material-icons eye-icon"
                hidden
                onMouseUp="formPass.type = 'password'; this.previousElementSibling.hidden = false; this.hidden = true;"
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
