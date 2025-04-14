import './UserList.scss'
import classNames from 'classnames'

const UserList = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'user-list')}
        >
            <ul className={classNames(className, 'user-list__list')}>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 1</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 2</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 3</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 4</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 5</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 6</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 7</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 8</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 9</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 10</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 11</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 12</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 13</a>
                </li>
                <li className={classNames(className, 'user-list__item')}>
                    <a href="#">Пользователь 14</a>
                </li>
            </ul>
        </div>
    )
}

export default UserList