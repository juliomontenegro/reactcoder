import UserCard from "../UserCard";
function ItemlistContainer (){
return (
    <>
    <UserCard
    numerocard="1"
    datoproducto1={10+10}
    datoproducto2="propiedad1"
    datoproducto3="propiedad2"
    datoproducto4="propiedad3"
    
    >        
    </UserCard>
    <UserCard
    numerocard="2"
    datoproducto1={20+10}
    datoproducto2="propiedad4"
    datoproducto3="propiedad5"
    datoproducto4="propiedad6"
    
    >        
    </UserCard>
    <UserCard
    numerocard="3"
    datoproducto1={30+10}
    datoproducto2="propiedad7"
    datoproducto3="propiedad8"
    datoproducto4="propiedad9"
    
    >        
    </UserCard>
    <UserCard
    numerocard="4"
    datoproducto1={40+10}
    datoproducto2="propiedad10"
    datoproducto3="propiedad11"
    datoproducto4="propiedad12"
    
    >        
    </UserCard>
    
    </>
)

}


export default ItemlistContainer;