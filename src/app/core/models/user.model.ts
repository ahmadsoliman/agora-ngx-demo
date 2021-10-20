export class UserInfo {
    private constructor(
        public email: string,
        public emailVerified: boolean,
        public name: string,
        public nickname: string,
        public picture: string,
        public sub: string,
        public updatedAt: Date,
    ) {}
    public static createNew(): UserInfo {
        return new UserInfo('', false, '', '', '', '', new Date());
    }
}

export class AuthToken {
    private constructor(
        public accessToken: string,
        public idToken: string,
        public expiresIn: number,
        public tenantId: string,
        public tenantUserId: string,
    ) {}

    public static createNew(): AuthToken {
        return new AuthToken('', '', 0, '', '');
    }
}

export class UserRegistration {
    private constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public company: string,
        public position: string,
        public password: string,
    ) {}
    public static createNew(): UserRegistration {
        return new UserRegistration('', '', '', '', '', '');
    }
}

export class PersonalInformation {
    constructor(public firstName: string, public lastName: string, public email: string, public mobile: string, public phone: string) {}
    public static createNew(): PersonalInformation {
        return new PersonalInformation('', '', '', '', '');
    }
}

export class UserDetails {
    public constructor(
        public groupUserId: string,
        public title: string,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public displayName: string,
        public suffix: string,
        public primaryEmail: string,
        public mobileNumber: string,
        public position: string,
        public storePin: string,
        public password: string,
        public verifyPassword: string,
        public startDate: Date,
        public endDate: Date,
        public identityProviderId: string,
        public isAccountOwner: boolean,
        public isActive: boolean,
        public timezoneId: number,
        public timezoneDisplayName: string,
        public userTypeId: number,
        public userTypeName: string,
        public storeRoles: UserStoreRoleAssociation[],
        public systemRoleIds: string[],
    ) {}
    public static createNew(): UserDetails {
        return new UserDetails(
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            new Date(),
            new Date(),
            '',
            false,
            false,
            0,
            '',
            0,
            '',
            [],
            [],
        );
    }
}

export class UserStoreRoleAssociation {
    constructor(public storeId: string, public storeRoleId: string) {}
    public static createNew(): UserStoreRoleAssociation {
        return new UserStoreRoleAssociation('', '');
    }
}

export class Timezone {
    private constructor(
        public timezoneId: number,
        public timezoneDisplayName: string,
        public timezoneStandardName: string,
        public timezoneDaylightName: string,
        public ianaName: string,
        public windowsTimezoneId: string,
        public supportsDayLightSavings: boolean,
        public baseUtcOffset: string,
    ) {}
    public static createNew(): Timezone {
        return new Timezone(0, '', '', '', '', '', false, '');
    }
}

export class UserType {
    private constructor(public userTypeId: number, public userTypeName: string, public userTypeDescription: string) {}
    public static createNew(): UserType {
        return new UserType(0, '', '');
    }
}

export interface UserCreateFormModel {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    primaryEmail: string;
    mobileNumber: string;
    position: string;
    password: string;
    verifyPassword: string;
}

export interface UserUpdateFormModel {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    primaryEmail: string;
    mobileNumber: string;
    position: string;
    suffix: string;
}
