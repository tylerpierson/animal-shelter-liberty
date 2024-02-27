import { useState } from 'react'
import styles from './CreateForm.module.scss'

export default function CreateForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        image: '',
        reservedForAdoption: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await props.createAnimal(formData, props.token)
            // cool thing to do once there is a show page done
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        // Spread the formData in so that as you edit, the other edited fields remain in place
        // In 'e.target.name' the 'name' refers to whichever target name you are currently clicked on, i.e. "email", "password"
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Create a new animal, <span className={styles.span}>{props.user.name}</span></h2>
            <input className={`${styles.input} ${styles.name}`} placeholder="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
            <input className={`${styles.input} ${styles.species}`} placeholder="Species" type="text" name="species" value={formData.species} onChange={handleChange} />
            <input className={`${styles.input} ${styles.image}`} placeholder="Image URL" type="text" name="image" value={formData.image} onChange={handleChange} />
            <select name="reservedForAdoption" value={formData.reservedForAdoption} onChange={handleChange}>
                <option value={false}>Up for Adoption</option>
                <option value={true}>Adopted</option>
            </select>
            <input className={styles.button} type="submit" value="Create Animal" />
        </form>
    )
}