export const withLoading = (Component) => {
    function ComponentWithLoading(props) {
        if (props.items.length < 1) {
            return <h1>Loading....</h1>
        }

        return (
            <Component {...props} />
        )
    }
    return ComponentWithLoading
}