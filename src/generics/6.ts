type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
};

type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
};

// Використання утиліти Omit для виключення поля 'errors'
type Params = Omit<Form, 'errors'>;
