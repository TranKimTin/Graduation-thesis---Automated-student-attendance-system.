import Joi, { ref } from "joi";

export async function getToken(data) {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
            .required(),
    });

    return await schema.validateAsync(data);
}

export async function validateGet(data) {
    const schema = Joi.object({
        pageSize: Joi.number().integer().min(1).max(100).required(),
        pageIndex: Joi.number().integer().min(1).required(),
        search: Joi.string().required(),
        id_section_class: Joi.number().integer(),
    });

    return await schema.validateAsync(data);
}

export async function insertUser(data) {
    //[[username, password, role_code]]
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().min(3).max(30).required(),
            Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
            Joi.string().alphanum().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function updateUser(data) {
    //[username , password, role_code, id]
    const schema = Joi.array().ordered(
        Joi.string().alphanum().min(3).max(30).required(),
        Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        Joi.string().alphanum().required(),
        Joi.number().integer().required()
    );
    return await schema.validateAsync(data);
}

export async function validateListCode(data) {
    //[code, code, code...]
    const schema = Joi.array().items(Joi.string().alphanum());
    return await schema.validateAsync(data);
}

export async function insertSectionClass(data) {
    const schema = Joi.object({
        sectionClass: Joi.array().items(
            Joi.array().ordered(
                Joi.string().alphanum().required(),
                Joi.string().required(),
                Joi.string().alphanum().required(),
                Joi.string().alphanum().required(),
                Joi.string().alphanum().required()
            )
        ),
        schedule: Joi.array().items(
            Joi.object({
                startDate: Joi.string().required(),
                startLesson: Joi.number().integer().min(1).max(12).required(),
                endLesson: Joi.number()
                    .integer()
                    .min(Joi.ref("startLesson"))
                    .max(12)
                    .required(),
                numberWeeks: Joi.number().integer().required(),
            })
        ),
    });
    return await schema.validateAsync(data);
}

export async function updateSectionClass(data) {
    const schema = Joi.object({
        sectionClass: Joi.Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().required(),
            Joi.string().alphanum().required(),
            Joi.string().alphanum().required(),
            Joi.string().alphanum().required(),
            Joi.number().integer().required()
        ),
        schedule: Joi.array().items(
            Joi.object({
                startDate: Joi.string().required(),
                startLesson: Joi.number().integer().min(1).max(12).required(),
                endLesson: Joi.number()
                    .integer()
                    .min(Joi.ref("startLesson"))
                    .max(12)
                    .required(),
                numberWeeks: Joi.number().integer().min(1).max(16).required(),
            })
        ),
    });
    return await schema.validateAsync(data);
}

export async function insertStudy(data) {
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().alphanum().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function updateStudy(data) {
    const schema = Joi.array().ordered(
        Joi.string().alphanum().required(),
        Joi.string().alphanum().required(),
        Joi.number().integer().required(),
        Joi.number().integer().required()
    );
    return await schema.validateAsync(data);
}

export async function deleteStudy(data) {
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().alphanum().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function insertTeach(data) {
    console.log(data);
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().alphanum().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function updateTeach(data) {
    const schema = Joi.array().ordered(
        Joi.string().alphanum().required(),
        Joi.string().alphanum().required(),
        Joi.number().integer().required(),
        Joi.number().integer().required()
    );
    return await schema.validateAsync(data);
}

export async function deleteTeach(data) {
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().alphanum().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function insertCategory(data) {
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function updateCategory(data) {
    const schema = Joi.array().ordered(
        Joi.string().alphanum().required(),
        Joi.string().required(),
        Joi.number().integer().required()
    );
    return await schema.validateAsync(data);
}

export async function insertStudent(data) {
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().required(),
            Joi.string().required(),
            Joi.string().required(),
            Joi.string().alphanum().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function updateStudent(data) {
    const schema = Joi.array().ordered(
        Joi.string().alphanum().required(),
        Joi.string().required(),
        Joi.string().required(),
        Joi.string().required(),
        Joi.string().alphanum().required(),
        Joi.number().integer().required()
    );
    return await schema.validateAsync(data);
}

export async function insertTeacher(data) {
    const schema = Joi.array().items(
        Joi.array().ordered(
            Joi.string().alphanum().required(),
            Joi.string().required(),
            Joi.string().required(),
            Joi.string().required()
        )
    );
    return await schema.validateAsync(data);
}

export async function updateTeacher(data) {
    const schema = Joi.array().ordered(
        Joi.string().alphanum().required(),
        Joi.string().required(),
        Joi.string().required(),
        Joi.string().required(),
        Joi.number().integer().required()
    );
    return await schema.validateAsync(data);
}

export async function attendance(data) {
    const schema = Joi.object({
        id_student: Joi.number().integer().required(),
        id_schedule: Joi.number().integer().required(),
        id_teacher: Joi.number().integer().allow(null)
    });
    return await schema.validateAsync(data);
}
