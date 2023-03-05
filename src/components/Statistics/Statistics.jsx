import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({title, stats}){
return (
    <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.stat_list}>
    <li className={css.item} key={stats.id}>
        <span className={css.label}>{stats.label}</span>
        <span className={css.percentage}>{stats.percentage}%</span>
    </li>
    </ul>
    </section>
    )
}

Statistics.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        })
    )
}