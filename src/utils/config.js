const ENV = 'uat';

export const FF = ({
    uat: {
        login: true,
        signup: true,
    },
    staging: {
        login: true,
        signup: false,
    },
    production: {
        login: true,
        signup: false,
    }
})[ENV || 'production'];