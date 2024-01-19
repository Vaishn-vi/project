<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class contactus extends Migration
{
    public function up()
    {
        $this->forge->addField([
            
            'name' => [
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],
            'mobile_no' => [
                'type'       => 'text',
                'constraint' => '10',
            ],

            'designation' => [
                
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],


        ]);
    
            $this->forge->createtable('contactus');
        }
    
        public function down()
        {
            $this->forge->droptable('contactus');
        }
    }