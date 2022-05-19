import { ApiCujaeData } from "../core/Interfaces/ApiCujaeData.interface";

export class UserModel {
    primaryGroup: string | undefined = '';
    cujaePersonDNI: string | undefined = '';
    cujaePersonExternal: boolean = false;
    cujaePersonType: string | undefined = 'Worker';
    cn: string | undefined = '';
    displayName: string | undefined = '';
    distinguisedName: string | undefined = ''
    givenName: string | undefined = ''
    name: string | undefined = '';
    guid: string | undefined = '';
    sId: string | undefined = '';
    userPrincipalName: string | undefined = '';

    userName: string = '';
    password: string = '';

    setData(data: ApiCujaeData) {
        this.primaryGroup = data.data?.__primaryGroup;
        this.cujaePersonDNI = data.data?.cUJAEPersonDNI;
        this.cujaePersonExternal = data.data?.cUJAEPersonExternal === 'TRUE';
        this.cujaePersonType = data.data?.cUJAEPersonType;
        this.cn = data.data?.cn;
        this.displayName = data.data?.displayName;
        this.distinguisedName = data.data?.distinguishedName;
        this.givenName = data.data?.givenName;
        this.name = data.data?.name;
        this.guid = data.data?.objectGUID;
        this.sId = data.data?.objectSid;
        this.userPrincipalName = data.data?.userPrincipalName;
    }

    readCache() {
        const jsonString = localStorage.getItem('userCache')
        
        if(jsonString != null) {
            let jsonObj: any = JSON.parse(jsonString);

            this.primaryGroup = jsonObj['primaryGroup'];
            this.cujaePersonDNI = jsonObj['cujaePersonDNI'];
            this.cujaePersonExternal = jsonObj['cujaePersonExternal'];
            this.cujaePersonType = jsonObj['cujaePersonType'];
            this.cn = jsonObj['cn'];
            this.displayName = jsonObj['displayName'];
            this.distinguisedName = jsonObj['distinguisedName'];
            this.givenName = jsonObj['givenName'];
            this.name = jsonObj['name'];
            this.guid = jsonObj['guid'];
            this.sId = jsonObj['sId'];
            this.userPrincipalName = jsonObj['userPrincipalName'];
        }
    }

    saveToCache() {
        const data = {
            primaryGroup: this.primaryGroup,
            cujaePersonDNI: this.cujaePersonDNI,
            cujaePersonType: this.cujaePersonType,
            cujaePersonExternal: this.cujaePersonExternal,
            cn: this.cn,
            displayName: this.displayName,
            distinguisedName: this.distinguisedName,
            givenName: this.givenName,
            name: this.name,
            guid: this.guid,
            sId: this.sId,
            userPrincipalName: this.userPrincipalName
        }
        const jsonString = JSON.stringify(data);
        console.log(jsonString);
        localStorage.setItem('userCache', jsonString);
    }
}