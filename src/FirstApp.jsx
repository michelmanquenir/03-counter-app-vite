import PropTypes from 'prop-types';

export const FirstApp = ({
  name,
  subTitle,
  title
 }) => {


  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
    )
}

FirstApp.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  name: 'michel manqueñir',
  subTitle: 'no tenemos subtitulo',
  /* title: 'no hay titulo' */
}