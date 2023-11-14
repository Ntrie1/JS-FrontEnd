export default function UncontrolledForm(){

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        console.log(formData.get('username'));
        console.log(formData.get('password'));
    }

    return(
        <>
        <h1>Uncontrolled form</h1>

        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username"  />
            </div>

            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password"  />
            </div>

            <div>
                <input type="submit" value='Register' />
            </div>
        </form>


        </>
    )
}